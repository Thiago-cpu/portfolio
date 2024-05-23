import type { NextRequest } from "next/server";

export function POST(request: NextRequest) {
  console.log({ request }, "POST");
  return Response.json({ hi: "hi from post" });
}

export function GET(request: NextRequest) {
  console.log({ request }, "GETT");
  return Response.json({ hi: "hi from get" });
}
