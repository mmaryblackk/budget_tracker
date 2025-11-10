"use client";
import { Separator } from "@/components/ui/separator";
import { AccountsManagement } from "./components/accounts/AccountsManagement";
import { CategoriesManagement } from "./components/categories/CategoriesManagement";
import { LoansManagement } from "./components/loans/LoansManagements";
import { useEffect } from "react";
import { useStore } from "@/store/store";

function ManagePage() {
  const { fetchAccounts } = useStore((state) => state.accounts);
  const { fetchCategories } = useStore((state) => state.categories);

  useEffect(() => {
    fetchCategories();
  }, [fetchCategories]);

  useEffect(() => {
    fetchAccounts();
  }, [fetchAccounts]);
  return (
    <>
      <AccountsManagement />
      <Separator />
      <LoansManagement />
      <Separator />
      <CategoriesManagement />
    </>
  );
}

export default ManagePage;
