"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { bankingMap, ILoan, TCurrency } from "@/types/interfaces";
import { iconsMap } from "@/utils/icons";
import { mockAccounts, mockCategories } from "@/utils/mockadata";
import { formatAmount } from "@/utils/utils";
import { Plus, Trash } from "lucide-react";
import Image from "next/image";

interface ILoanCardProps {
  loan: ILoan;
}

export const LoanCard = ({ loan }: ILoanCardProps) => {
  const category = mockCategories.find((cat) => cat.id === loan.category_id);
  const account = mockAccounts.find((acc) => acc.id === loan.account_id);
  const Icon = iconsMap[category?.icon ?? "CircleQuestionMark"];

  const paidAmount = (loan.totalAmount / loan.totalPayments) * loan.monthPaid;

  const progress = Math.min((paidAmount / loan.totalAmount) * 100, 100);

  return (
    <Card className="w-[300px] gap-1">
      <CardHeader className="gap-4">
        <CardTitle className="flex justify-between items-center">
          <span className="text-xl">{loan.name}</span>
          <div className="flex items-center gap-2">
            <Tooltip>
              <TooltipTrigger asChild>
                <Icon
                  className="w-8 h-8 p-1.5 rounded-full text-white"
                  style={{ backgroundColor: category?.color }}
                />
              </TooltipTrigger>
              <TooltipContent>
                <p>{category?.name}</p>
              </TooltipContent>
            </Tooltip>
            {account?.banking && (
              <Image
                width={32}
                height={32}
                src={bankingMap[account.banking]}
                alt={""}
              />
            )}
          </div>
        </CardTitle>
      </CardHeader>
      <CardContent className="px-6 flex flex-col gap-5">
        <div className="flex flex-col gap-1 text-lg">
          <div className="flex justify-between">
            <span className="text-muted-foreground">Total amount</span>
            <span>
              {formatAmount(account?.currency as TCurrency, loan.totalAmount)}
            </span>
          </div>
          <div className="flex justify-between">
            <span className="text-muted-foreground">Total months</span>
            <span>{loan.totalPayments}</span>
          </div>
        </div>

        <Tooltip>
          <TooltipTrigger asChild>
            <Progress value={progress} className="h-3 rounded-full" />
          </TooltipTrigger>
          <TooltipContent>
            <p>{loan.totalPayments - loan.monthPaid} payments left</p>
            <p>
              {formatAmount(
                account?.currency as TCurrency,
                loan.totalAmount - paidAmount
              )}{" "}
              left
            </p>
          </TooltipContent>
        </Tooltip>

        <div className="flex flex-col gap-1 text-lg">
          <div className="flex justify-between">
            <span className="text-muted-foreground">Paid amount</span>
            <span>
              {formatAmount(account?.currency as TCurrency, paidAmount)}
            </span>
          </div>
        </div>

        <Separator className="my-1" />

        <div className="flex justify-between items-center">
          <Button variant="constructive">
            <Plus /> Payment
          </Button>
          <Button variant="destructive">
            <Trash />
            Delete
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};
