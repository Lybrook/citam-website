import { z } from "zod";
import { getClientKey, isRateLimited, jsonError } from "@/src/lib/security";
import { NextRequest } from "next/server";

const contactSchema = z.object({
  name: z.string().trim().min(2).max(80),
  email: z.string().trim().email().max(254),
  message: z.string().trim().min(10).max(5000),
});

export async function POST(request: NextRequest) {
  const key = `contact:${getClientKey(request)}`;
  if (isRateLimited(key, 5)) return jsonError("Too many requests. Please try again later.", 429);

  try {
    const body = await request.json();
    const result = contactSchema.safeParse(body);
    if (!result.success) return jsonError("Please provide a valid name, email, and message.", 400);

    // The endpoint intentionally does not log or echo personal message content.
    // Connect this handler to the church's mail provider or database when configured.
    return Response.json({ message: "Your message was received. The church team will respond soon." }, { status: 201 });
  } catch {
    return jsonError("Invalid request.", 400);
  }
}
