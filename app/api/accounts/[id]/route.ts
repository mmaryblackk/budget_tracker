import { prisma } from "@/prisma/client";
import { accountSchema } from "@/utils/schemas";
import { NextRequest, NextResponse } from "next/server";

export async function PATCH(request: NextRequest) {
  const url = new URL(request.url);
  const id = url.pathname.split("/").pop();

  const body = await request.json();
  const validation = accountSchema.safeParse(body);

  if (!validation.success) {
    return NextResponse.json(validation.error, { status: 400 });
  }

  const { name, balance, type, currency, banking, owner } = body;

  const account = await prisma.account.findUnique({
    where: {
      id: parseInt(id as string),
    },
  });

  if (!account) {
    return NextResponse.json({ error: "Invalid account" }, { status: 404 });
  }

  const updatedAccount = await prisma.account.update({
    where: { id: account.id },
    data: {
      name,
      balance,
      type,
      currency,
      banking: type === "CASH" ? null : banking,
      owner,
    },
  });

  return NextResponse.json(updatedAccount);
}

export async function DELETE(request: NextRequest) {
  const url = new URL(request.url);
  const id = url.pathname.split("/").pop();

  const account = await prisma.account.findUnique({
    where: {
      id: parseInt(id as string),
    },
  });

  if (!account) {
    return NextResponse.json({ error: "Invalid account" }, { status: 404 });
  }

  await prisma.account.delete({
    where: { id: account.id },
  });

  return NextResponse.json({});
}
