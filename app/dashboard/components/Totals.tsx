import { Card, CardContent } from "@/components/ui/card";
import { ITotals } from "@/types/interfaces";
import { ExpenseIcon, IncomeIcon, WalletIcon } from "./IconsTotals";

const totals: ITotals[] = [
  {
    key: "INCOME",
    label: "Income",
    icon: IncomeIcon,
    amount: 0.01,
  },
  {
    key: "EXPENSE",
    label: "Expense",
    icon: ExpenseIcon,
    amount: 0.01,
  },
  {
    key: "BALANCE",
    label: "Balance",
    icon: WalletIcon,
    amount: 0.01,
  },
];

export const Totals = () => {
  return (
    <div className="grid grid-cols-3 gap-6">
      {totals.map((total) => {
        const Icon = total.icon;
        return (
          <Card key={total.key} className="p-0">
            <CardContent className="p-6 flex gap-4 items-center">
              <Icon />
              <div>
                <h3 className="text-xl font-medium text-muted-foreground">
                  {total.label}
                </h3>
                <span className="text-3xl font-semibold">{total.amount}</span>
              </div>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
};
