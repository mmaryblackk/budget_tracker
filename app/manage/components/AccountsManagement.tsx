import { mockAccounts } from "@/utils/mockadata";
import { AccountCard } from "./AccountCard";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";

export const AccountsManagement = () => {
  return (
    <>
      <div className="flex justify-between items-center">
        <h2 className="font-bold text-4xl pt-2">Your accounts</h2>
        <Button variant="outline" size="lg" className="text-md">
          <Plus />
          Create new
        </Button>
      </div>
      <div className="flex flex-wrap gap-6">
        {mockAccounts.map((account) => (
          <AccountCard key={account.id} account={account} />
        ))}
      </div>
    </>
  );
};
