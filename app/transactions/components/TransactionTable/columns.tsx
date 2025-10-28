"use client";

import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { ITransaction } from "@/types/interfaces";
import { iconsMap } from "@/utils/icons";
import { mockCategories } from "@/utils/mockadata";
import { formatAmount, formatDate, formatString } from "@/utils/utils";
import { ColumnDef } from "@tanstack/react-table";

export const columns: ColumnDef<ITransaction>[] = [
  {
    accessorKey: "category_id",
    header: () => <div className="ml-2 text-xl font-semibold">Category</div>,
    cell: ({ row }) => {
      const category_id = row.getValue("category_id") as number;
      const category = mockCategories.find((cat) => cat.id === category_id);
      if (!category) {
        return null;
      }

      const Icon = iconsMap[category.icon];

      return (
        <div className="pl-2 flex items-center gap-2">
          <Icon
            className="w-6 h-6 p-1 rounded-full text-white"
            style={{ backgroundColor: category.color }}
          />
          <span className="text-base">{category.name}</span>
        </div>
      );
    },
  },
  {
    accessorKey: "date",
    header: () => <div className="text-xl font-semibold">Date</div>,
    cell: ({ row }) => {
      const date = row.getValue("date") as string;
      return <div className="font-medium">{formatDate(date, "en-US")}</div>;
    },
  },

  {
    accessorKey: "type",
    header: () => <div className="text-xl font-semibold">Type</div>,
    cell: ({ row }) => {
      const type = row.original.type;
      return (
        <div className="font-medium">
          <Badge variant="outline">{formatString(type)}</Badge>
        </div>
      );
    },
  },
  {
    accessorKey: "amount",
    header: () => <div className="text-xl font-semibold">Amount</div>,
    cell: ({ row }) => {
      const amount = row.original.amount;
      const type = row.original.type;
      const currency = row.original.currency;

      return (
        <div
          className={cn(
            "font-medium",
            type === "INCOME" && "text-[#00D621]/80",
            type === "EXPENSE" && "text-[#FF2826]/80"
          )}
        >
          {type === "INCOME" && "+ "}
          {type === "EXPENSE" && "- "}
          {formatAmount(currency, amount)}
        </div>
      );
    },
  },
  {
    accessorKey: "description",
    header: () => <div className="text-xl font-semibold">Description</div>,
    cell: ({ row }) => {
      return (
        <div className="font-medium text-muted-foreground">
          {row.getValue("description")}
        </div>
      );
    },
  },
];
