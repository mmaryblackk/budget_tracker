"use client";

import { useStore } from "@/store/useStore";
import { useEffect } from "react";
import { AccountCard } from "./AccountCard";
import { AccountCardSkeleton } from "./AccountCardSkeleton";
import { AccountDialog } from "./AccountDialog";

export const AccountsManagement = () => {
  const { accounts, isLoading, updatingId, fetchAccounts } = useStore();

  useEffect(() => {
    fetchAccounts();
  }, [fetchAccounts]);
  return (
    <>
      <div className="flex justify-between items-center">
        <h2 className="font-bold text-4xl pt-2">Your accounts</h2>
        <AccountDialog />
      </div>
      <div className="flex flex-wrap gap-6">
        {isLoading
          ? Array.from({ length: 4 }).map((_, index) => (
              <AccountCardSkeleton key={index} />
            ))
          : accounts.map((account) =>
              account.id === updatingId ? (
                <AccountCardSkeleton key={account.id} />
              ) : (
                <AccountCard key={account.id} account={account} />
              )
            )}
      </div>
    </>
  );
};
