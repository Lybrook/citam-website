import { NextRequest } from "next/server";
import { z } from "zod";
import { getClientKey, isRateLimited, jsonError } from "@/src/lib/security";

const schema = z.object({ email: z.string().trim().email().max(254) });

export async function POST(request: NextRequest) {
  if (isRateLimited(`newsletter:${getClientKey(request)}`, 3)) return jsonError("Too many requests. Please try again later.", 429);
  try {
    const result = schema.safeParse(await request.json());
    if (!result.success) return jsonError("Please provide a valid email address.", 400);
    return Response.json({ message: "You are on the CITAM Kitale updates list." }, { status: 201 });
  } catch {
    return jsonError("Invalid request.", 400);
  }
}
