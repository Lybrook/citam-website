import { testimonials } from "@/src/app/data/testimonials";

export function GET() {
  return Response.json(testimonials, { headers: { "Cache-Control": "public, max-age=300, s-maxage=3600" } });
}
