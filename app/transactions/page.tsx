import { mockTransactions } from "@/utils/mockadata";
import { TransactionFilters } from "./components/TransactionFilters";
import { columns } from "./components/TransactionTable/columns";
import { DataTable } from "./components/TransactionTable/data-table";

function TransactionPage() {
  return (
    <div className="flex flex-col gap-4">
      <TransactionFilters />
      <DataTable columns={columns} data={mockTransactions} />
    </div>
  );
}

export default TransactionPage;
