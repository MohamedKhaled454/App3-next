import { NextRequest, NextResponse } from "next/server";

export function GET(
  request: NextRequest,
  { params }: { params: { userId: number } }
) {
  const { userId } = params;
  if (userId > 10)
    return NextResponse.json({ error: "user not found" }, { status: 404 });
  return NextResponse.json([{ userId, name: "Mohamed" }]);
}
