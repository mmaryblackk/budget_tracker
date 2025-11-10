"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import { ICategory } from "@/types/interfaces";
import { iconsMap } from "@/utils/icons";
import { CategoryDialog } from "./CategoryDialog";
import {
  ConfirmationDialog,
  IConfirmationDialogProps,
} from "@/components/ConfirmationDialog";
import { Button } from "@/components/ui/button";
import { Trash } from "lucide-react";
import { useStore } from "@/store/store";

const CONFIRMATION_DIALOG_PROPS: IConfirmationDialogProps = {
  title: "Are you sure you want to delete the category?",
  message:
    "This action cannot be undone. This will permanently delete this category.",
  secondaryMessage:
    "Note! All your transactions under this category will remain.",
};

interface ICategoryCardProps {
  category: ICategory;
}

export const CategoryCard = ({ category }: ICategoryCardProps) => {
  const Icon = iconsMap[category.icon];
  const { isLoading, deleteCategory } = useStore((state) => state.categories);

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
          <CategoryDialog category={category} />
          <ConfirmationDialog
            {...CONFIRMATION_DIALOG_PROPS}
            isDeleting={true}
            isLoading={isLoading}
            onConfirm={async () => await deleteCategory(category.id)}
          >
            <Button variant="outline">
              <Trash />
            </Button>
          </ConfirmationDialog>
        </div>
      </CardContent>
    </Card>
  );
};
