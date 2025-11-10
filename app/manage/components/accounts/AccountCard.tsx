import {
  ConfirmationDialog,
  IConfirmationDialogProps,
} from "@/components/ConfirmationDialog";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import { useStore } from "@/store/store";
import { bankingMap, currencyMap, IAccount } from "@/types/interfaces";
import { formatString } from "@/utils/formatters";
import { Coins, CreditCard, Trash } from "lucide-react";
import Image from "next/image";
import { AccountDialog } from "./AccountDialog";

const CONFIRMATION_DIALOG_PROPS: IConfirmationDialogProps = {
  title: "Are you sure you want to delete account?",
  message: "This action can't be undone.",
  secondaryMessage:
    "Note! All your transactions under this account will remain.",
};

interface IAccountCardProps {
  account: IAccount;
}

export const AccountCard = ({ account }: IAccountCardProps) => {
  const { isLoading, deleteAccount } = useStore((state) => state.accounts);

  return (
    <Card className="w-[300px] gap-1">
      <CardHeader>
        <CardTitle className="flex justify-between items-center">
          <span className="text-xl">{account.name}</span>

          {account?.banking && (
            <Image
              width={32}
              height={32}
              src={bankingMap[account.banking]}
              alt={""}
            />
          )}
        </CardTitle>
      </CardHeader>
      <CardContent className="px-6 flex flex-col gap-3">
        <div className="flex flex-col gap-1 text-lg">
          <div className="flex justify-between">
            <span className="text-muted-foreground">Type</span>
            <div className="flex items-center gap-1">
              <span>{formatString(account.type)}</span>
              {account.type === "CARD" && <CreditCard size={18} />}
              {account.type === "CASH" && <Coins size={18} />}
            </div>
          </div>
          <div className="flex justify-between">
            <span className="text-muted-foreground">Currency</span>
            <span>{account.currency}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-muted-foreground">Owner</span>
            <span>{formatString(account.owner)}</span>
          </div>
        </div>
        <Separator className="my-1" />
        <div className="flex justify-between items-center">
          <span className="text-muted-foreground font-semibold text-xl">
            Balance
          </span>
          <span
            className={cn(
              "font-bold text-2xl",
              account.balance > 0 && "text-[#00D621]/80",
              account.balance < 0 && "text-[#FF2826]/80"
            )}
          >
            {account.balance.toFixed(2)} {currencyMap[account.currency]}
          </span>
        </div>
        <Separator className="my-1" />
        <div className="flex justify-between items-center">
          <AccountDialog account={account} />
          <ConfirmationDialog
            {...CONFIRMATION_DIALOG_PROPS}
            isDeleting={true}
            isLoading={isLoading}
            onConfirm={async () => await deleteAccount(account.id)}
          >
            <Button variant="destructive">
              <Trash />
              Delete
            </Button>
          </ConfirmationDialog>
        </div>
      </CardContent>
    </Card>
  );
};
