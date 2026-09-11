import { NextRequest } from "next/server";
import { z } from "zod";
import { getClientKey, isRateLimited, jsonError } from "@/src/lib/security";

export const runtime = "nodejs";

const donationSchema = z.object({
  amount: z.coerce.number().int().min(10).max(1_000_000),
  donationType: z.enum(["general", "missions", "building-fund", "youth-ministry"]),
  name: z.string().trim().min(2).max(80),
  email: z.string().trim().email().max(254),
  phone: z.string().trim().regex(/^(?:07|01)\d{8}$|^254(?:7|1)\d{8}$/),
});

function normalizePhone(phone: string) {
  const digits = phone.replace(/\D/g, "");
  return digits.startsWith("254") ? digits : `254${digits.slice(1)}`;
}

function timestamp() {
  const date = new Date();
  const parts = [date.getUTCFullYear(), date.getUTCMonth() + 1, date.getUTCDate(), date.getUTCHours(), date.getUTCMinutes(), date.getUTCSeconds()];
  return parts.map((part, index) => index === 0 ? String(part) : String(part).padStart(2, "0")).join("");
}

export async function POST(request: NextRequest) {
  if (isRateLimited(`donate:${getClientKey(request)}`, 3)) return jsonError("Too many attempts. Please try again later.", 429);

  const config = {
    consumerKey: process.env.MPESA_CONSUMER_KEY,
    consumerSecret: process.env.MPESA_CONSUMER_SECRET,
    shortcode: process.env.MPESA_SHORTCODE,
    passkey: process.env.MPESA_PASSKEY,
    callbackUrl: process.env.MPESA_CALLBACK_URL,
  };
  if (Object.values(config).some((value) => !value)) {
    return jsonError("Donation payments are not configured. Please contact the church office.", 503);
  }

  try {
    const parsed = donationSchema.safeParse(await request.json());
    if (!parsed.success) return jsonError("Please check your donation details and try again.", 400);

    const baseUrl = process.env.MPESA_ENVIRONMENT === "sandbox" ? "https://sandbox.safaricom.co.ke" : "https://api.safaricom.co.ke";
    const auth = Buffer.from(`${config.consumerKey}:${config.consumerSecret}`).toString("base64");
    const tokenResponse = await fetch(`${baseUrl}/oauth/v1/generate?grant_type=client_credentials`, {
      headers: { Authorization: `Basic ${auth}` },
      cache: "no-store",
    });
    if (!tokenResponse.ok) return jsonError("Payment service is temporarily unavailable.", 502);
    const token = (await tokenResponse.json() as { access_token?: string }).access_token;
    if (!token) return jsonError("Payment service is temporarily unavailable.", 502);

    const stamp = timestamp();
    const password = Buffer.from(`${config.shortcode}${config.passkey}${stamp}`).toString("base64");
    const phone = normalizePhone(parsed.data.phone);
    const response = await fetch(`${baseUrl}/mpesa/stkpush/v1/processrequest`, {
      method: "POST",
      headers: { Authorization: `Bearer ${token}`, "Content-Type": "application/json" },
      body: JSON.stringify({
        BusinessShortCode: config.shortcode,
        Password: password,
        Timestamp: stamp,
        TransactionType: "CustomerPayBillOnline",
        Amount: parsed.data.amount,
        PartyA: phone,
        PartyB: config.shortcode,
        PhoneNumber: phone,
        CallBackURL: config.callbackUrl,
        AccountReference: "CITAM-Kitale",
        TransactionDesc: `CITAM Kitale ${parsed.data.donationType} donation`,
      }),
      cache: "no-store",
    });
    const result = await response.json() as { ResponseCode?: string };
    if (!response.ok || result.ResponseCode !== "0") return jsonError("We could not start the payment. Please try again.", 502);
    return Response.json({ message: "A payment prompt has been sent to your phone. Complete it to finish your donation." });
  } catch {
    return jsonError("We could not start the payment. Please try again.", 502);
  }
}
