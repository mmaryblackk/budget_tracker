import { prisma } from "@/prisma/client";
import { categorySchema } from "@/utils/schemas";
import { NextRequest, NextResponse } from "next/server";

export async function PUT(request: NextRequest) {
  const url = new URL(request.url);
  const id = url.pathname.split("/").pop();

  const body = await request.json();

  const validation = categorySchema.safeParse(body);
  if (!validation.success) {
    return NextResponse.json(validation.error, { status: 400 });
  }

  const { name, type, color, icon } = validation.data;

  const category = await prisma.category.findUnique({
    where: { id: parseInt(id as string) },
  });

  if (!category) {
    return NextResponse.json({ error: "Invalid category" }, { status: 404 });
  }

  const updatedCategory = await prisma.category.update({
    where: { id: category.id },
    data: {
      name,
      type,
      color,
      icon,
    },
  });

  return NextResponse.json(updatedCategory);
}

export async function DELETE(request: NextRequest) {
  const url = new URL(request.url);
  const id = url.pathname.split("/").pop();

  const category = await prisma.category.findUnique({
    where: {
      id: parseInt(id as string),
    },
  });

  if (!category) {
    return NextResponse.json({ error: "Invalid category" }, { status: 404 });
  }

  await prisma.category.delete({
    where: { id: category.id },
  });

  return NextResponse.json({});
}
