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
import { useStore } from "@/store/store";
import { bankingMap, ILoan, TCurrency } from "@/types/interfaces";
import { formatAmount } from "@/utils/formatters";
import { countMadePayments, nextPaymentDate } from "@/utils/helpers";
import { iconsMap } from "@/utils/icons";
import { format } from "date-fns";
import { Plus, Trash } from "lucide-react";
import Image from "next/image";

interface ILoanCardProps {
  loan: ILoan;
}

export const LoanCard = ({ loan }: ILoanCardProps) => {
  const { accounts } = useStore((state) => state.accounts);
  const { categories } = useStore((state) => state.categories);

  const category = categories.find((cat) => cat.id === loan.categoryId);
  const account = accounts.find((acc) => acc.id === loan.accountId);

  const Icon = iconsMap[category?.icon ?? "CircleQuestionMark"];

  const monthsPaid = countMadePayments(loan.firstPaymentDate);

  const paidAmount = (loan.totalAmount / loan.totalMonths) * monthsPaid;

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
                <p>{category?.name ?? "Unknown category"}</p>
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
            <span>{loan.totalMonths}</span>
          </div>
        </div>

        <Tooltip>
          <TooltipTrigger asChild>
            <Progress value={progress} className="h-3 rounded-full" />
          </TooltipTrigger>
          <TooltipContent>
            <p>
              {formatAmount(
                account?.currency as TCurrency,
                loan.totalAmount - paidAmount
              )}{" "}
              left
            </p>
            <p>{loan.totalMonths - monthsPaid} payments left</p>
          </TooltipContent>
        </Tooltip>

        <div className="flex flex-col gap-1 text-lg">
          <div className="flex justify-between">
            <span className="text-muted-foreground">Paid amount</span>
            <span>
              {formatAmount(account?.currency as TCurrency, paidAmount)}
            </span>
          </div>
          <div className="flex justify-between">
            <span className="text-muted-foreground">Months paid</span>
            <span>{monthsPaid}</span>
          </div>
        </div>
        <Separator />
        <div className="flex flex-col gap-1 text-lg">
          <div className="flex justify-between">
            <span className="text-muted-foreground">First Payment</span>
            <span>{format(loan.firstPaymentDate, "dd.MM.yyyy")}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-muted-foreground">Next Payment</span>
            <span>
              {format(
                nextPaymentDate(loan.firstPaymentDate, monthsPaid),
                "dd.MM.yyyy"
              )}
            </span>
          </div>
        </div>

        <Separator />

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
