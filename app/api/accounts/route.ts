/* eslint-disable @typescript-eslint/no-unused-vars */
import { prisma } from "@/prisma/client";
import { accountSchema } from "@/utils/schemas";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const accounts = await prisma.account.findMany();
  return NextResponse.json(accounts);
}

export async function POST(request: NextRequest) {
  const body = await request.json();
  const validation = accountSchema.safeParse(body);
  if (!validation.success) {
    return NextResponse.json(validation.error, { status: 400 });
  }

  const newAccount = await prisma.account.create({
    data: {
      name: body.name,
      balance: body.balance,
      type: body.type,
      currency: body.currency,
      banking: body?.banking,
      owner: body.owner,
    },
  });

  return NextResponse.json(newAccount, { status: 201 });
}
