import { prisma } from "@/prisma/client";
import { categorySchema } from "@/utils/schemas";
import { NextRequest, NextResponse } from "next/server";

export async function GET() {
  const categories = await prisma.category.findMany();
  return NextResponse.json(categories);
}

export async function POST(request: NextRequest) {
  const body = await request.json();
  const validation = categorySchema.safeParse(body);
  if (!validation.success) {
    return NextResponse.json(validation.error, { status: 400 });
  }

  const newCategory = await prisma.category.create({
    data: {
      name: body.name,
      icon: body.icon,
      color: body.color,
      type: body.type,
    },
  });

  return NextResponse.json(newCategory, { status: 201 });
}
