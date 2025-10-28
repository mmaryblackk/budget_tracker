import { Separator } from "@/components/ui/separator";
import { AccountsManagement } from "./components/AccountsManagement";
import { CategoriesManagement } from "./components/CategoriesManagement";
import { LoansManagement } from "./components/LoansManagements";

function ManagePage() {
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
