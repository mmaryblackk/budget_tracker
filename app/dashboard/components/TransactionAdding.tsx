"use client";

import { Button } from "@/components/ui/button";

export const TransactionAdding = () => {
  return (
    <>
      <h2 className="font-bold text-3xl">Add new transaction</h2>
      <div className="flex gap-6">
        <Button size="lg" variant="constructive" className="text-md">
          New Income 🤑
        </Button>
        <Button size="lg" variant="destructive" className="text-md">
          New Expense 😱
        </Button>
      </div>
    </>
  );
};
