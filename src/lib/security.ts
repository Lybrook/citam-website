import { NextRequest } from "next/server";

const requestBuckets = new Map<string, { count: number; resetAt: number }>();

export function getClientKey(request: NextRequest) {
  return request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";
}

export function isRateLimited(key: string, limit = 8, windowMs = 60_000) {
  const now = Date.now();
  const current = requestBuckets.get(key);
  if (!current || current.resetAt <= now) {
    requestBuckets.set(key, { count: 1, resetAt: now + windowMs });
    return false;
  }
  current.count += 1;
  return current.count > limit;
}

export function jsonError(message: string, status: number) {
  return Response.json({ error: message }, { status });
}
