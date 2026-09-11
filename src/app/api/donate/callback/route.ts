import { NextRequest } from "next/server";
import { z } from "zod";

const callbackSchema = z.object({
  Body: z.object({
    stkCallback: z.object({
      MerchantRequestID: z.string().optional(),
      CheckoutRequestID: z.string().optional(),
      ResultCode: z.number(),
      ResultDesc: z.string().optional(),
    }),
  }),
});

export async function POST(request: NextRequest) {
  const expectedToken = process.env.MPESA_CALLBACK_TOKEN;
  if (expectedToken && request.headers.get("x-mpesa-callback-token") !== expectedToken) {
    return Response.json({ error: "Unauthorized" }, { status: 401 });
  }
  try {
    const result = callbackSchema.safeParse(await request.json());
    if (!result.success) return Response.json({ error: "Invalid callback" }, { status: 400 });
    // Persist ResultCode/CheckoutRequestID in a database when one is configured.
    return Response.json({ ResultCode: 0, ResultDesc: "Accepted" });
  } catch {
    return Response.json({ error: "Invalid callback" }, { status: 400 });
  }
}
