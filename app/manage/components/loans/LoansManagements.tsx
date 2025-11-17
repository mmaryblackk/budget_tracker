"use client";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Archive, Plus } from "lucide-react";
import { LoanCard } from "./LoanCard";
import { useStore } from "@/store/store";
import { LoanCardSkeleton } from "./LoanCardSkeleton";
import { EmptyAccountCard } from "../accounts/EmptyAccountCard";

export const LoansManagement = () => {
  const { loans, isLoading } = useStore((state) => state.loans);

  return (
    <>
      <div className="flex justify-between items-center">
        <h2 className="font-bold text-4xl pt-2">Your loans and installments</h2>
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
        {isLoading ? (
          Array.from({ length: 2 }).map((_, index) => (
            <LoanCardSkeleton key={index} />
          ))
        ) : loans.length === 0 ? (
          // ADD LOAN EMPTY CARD
          <EmptyAccountCard />
        ) : (
          loans.map((loan) =>
            loan.id === 0 ? (
              <LoanCardSkeleton key={loan.id} />
            ) : (
              <LoanCard key={loan.id} loan={loan} />
            )
          )
        )}
      </div>
    </>
  );
};
