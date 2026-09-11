import { leadership } from "@/src/app/data/leadership";

export function GET() {
  return Response.json(leadership, { headers: { "Cache-Control": "public, max-age=300, s-maxage=3600" } });
}
