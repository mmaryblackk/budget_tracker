import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { mockLoans } from "@/utils/mockadata";
import { Archive, Plus } from "lucide-react";
import { LoanCard } from "./LoanCard";

export const LoansManagement = () => {
  return (
    <>
      <div className="flex justify-between items-center">
        <h2 className="font-bold text-4xl pt-2">Your loans and debts</h2>
        <div className="flex gap-3">
          <Button variant="outline" size="lg" className="text-md">
            <Plus />
            Add loan
          </Button>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="outline" size="icon-lg" className="text-md">
                <Archive />
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>Archive</p>
            </TooltipContent>
          </Tooltip>
        </div>
      </div>
      <div className="flex flex-wrap gap-6">
        {mockLoans.map((loan) => (
          <LoanCard key={loan.id} loan={loan} />
        ))}
      </div>
    </>
  );
};
