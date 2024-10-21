import { NextRequest, NextResponse } from "next/server";
import schema from "../schema";

interface Props {
  params: { id: string }
}

export function GET(request: NextRequest, { params: { id } }: Props) {
  const numberId = Number(id);
  if (isNaN(numberId) || numberId > 10)
    return NextResponse.json({ error: "User not found" }, { status: 404 });

  return NextResponse.json({ numberId, name: `Toto_${id}` });
}

export async function PUT(request: NextRequest, { params: { id } }: Props) {
  const body = await request.json();
  const validation = schema.safeParse(body);
  if (!validation.success)
    return NextResponse.json(validation.error.errors, { status: 400 });

  const numberId = Number(id);
  if (isNaN(numberId) || numberId > 10)
    return NextResponse.json({ error: "User not found" }, { status: 404 });

  return NextResponse.json({ id: 1, name: body.name });
}

export function DELETE(request: NextRequest, { params: { id } }: Props) {
  const numberId = Number(id);
  if (isNaN(numberId) || numberId > 10)
    return NextResponse.json({ error: "User not found" }, { status: 404 });

  return NextResponse.json({});
}
