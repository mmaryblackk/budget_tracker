import { prisma } from "@/prisma/client";
import { loanSchema } from "@/utils/schemas";
import { NextRequest, NextResponse } from "next/server";

export async function GET() {
  const loans = await prisma.loan.findMany();
  return NextResponse.json(loans);
}

export async function POST(request: NextRequest) {
  const body = await request.json();
  const validation = loanSchema.safeParse(body);
  if (!validation.success) {
    return NextResponse.json(validation.error, { status: 400 });
  }

  const newLoan = await prisma.loan.create({
    data: {
      accountId: body.accountId,
      categoryId: body.categoryId,
      name: body.name,
      totalAmount: body.totalAmount,
      totalMonths: body.totalMonths,
      firstPaymentDate: new Date(body.firstPaymentDate),
      interestRate: body?.interestRate ?? 0,
    },
  });

  return NextResponse.json(newLoan, { status: 201 });
}
