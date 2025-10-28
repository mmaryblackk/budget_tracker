"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import { ICategory } from "@/types/interfaces";
import { iconsMap } from "@/utils/icons";
import { PiggyBank, Plus, Trash } from "lucide-react";

interface ICategoryCardProps {
  category: ICategory;
}

export const CategoryCard = ({ category }: ICategoryCardProps) => {
  const Icon = iconsMap[category.icon];
  return (
    <Card
      className={cn(
        "w-[200px] p-4 bg-background gap-1 border shadow-md",
        category.type === "INCOME"
          ? "border-[#00D621]/60 shadow-[#00D621]/60"
          : "border-[#FF2826]/60 shadow-[#FF2826]/60"
      )}
    >
      <CardContent className="px-2 flex flex-col gap-3">
        <div className="flex flex-col items-center gap-4 text-lg">
          <div
            style={{ backgroundColor: category.color }}
            className="p-4 rounded-2xl"
          >
            <Icon className="w-14 h-14 text-white" />
          </div>
          <span className="text-xl font-semibold">{category.name}</span>
        </div>

        <Separator />
        <div className="flex justify-between items-center">
          <Button variant="outline">Edit</Button>
          <Button variant="outline">
            <Trash />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export const EmptyCategoryCard = () => {
  return (
    <Card className="w-[200px] h-[227px] p-4 bg-background gap-1 justify-center border border-muted border-dashed shadow-md">
      <CardContent className="px-2 flex flex-col items-center gap-5">
        <PiggyBank className="w-14 h-14 text-white/80" />
        <span className="text-sm text-center text-muted-foreground">
          You don&apos;t have any income categories yet
        </span>
        <Button>
          <Plus /> Add category
        </Button>
      </CardContent>
    </Card>
  );
};
