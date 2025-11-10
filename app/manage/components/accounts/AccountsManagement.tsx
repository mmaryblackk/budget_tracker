"use client";
import { useStore } from "@/store/store";
import { AccountCard } from "./AccountCard";
import { AccountCardSkeleton } from "./AccountCardSkeleton";
import { AccountDialog } from "./AccountDialog";
import { EmptyAccountCard } from "./EmptyAccountCard";

export const AccountsManagement = () => {
  const { accounts, isLoading, updatingId } = useStore(
    (state) => state.accounts
  );

  return (
    <>
      <div className="flex justify-between items-center">
        <h2 className="font-bold text-4xl pt-2">Your accounts</h2>
        <AccountDialog />
      </div>
      <div className="flex flex-wrap gap-6">
        {isLoading ? (
          Array.from({ length: 4 }).map((_, index) => (
            <AccountCardSkeleton key={index} />
          ))
        ) : accounts.length === 0 ? (
          <EmptyAccountCard />
        ) : (
          accounts.map((account) =>
            account.id === updatingId ? (
              <AccountCardSkeleton key={account.id} />
            ) : (
              <AccountCard key={account.id} account={account} />
            )
          )
        )}
      </div>
    </>
  );
};
