import type { NextRequest } from "next/server";

export async function POST(request: NextRequest) {
  const data = (await request.json()) as unknown;
  const params = request.nextUrl.searchParams;
  console.log(params.get("token"));
  console.log(JSON.stringify(data, null, 2));
  return Response.json({ hi: "hi from post" });
}
