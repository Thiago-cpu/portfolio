import { db } from "@/server/db";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    await db.query.users.findFirst();
    return NextResponse.json({ msg: "database is awake" }, { status: 200 });
  } catch (error) {
    console.error("Error waking database:", error);
    return NextResponse.json(
      { error: "Failed to wake database" },
      { status: 500 },
    );
  }
}
