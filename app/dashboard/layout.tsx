import { IChildrenProps } from "@/types/interfaces";
import { TransactionAdding } from "./components/TransactionAdding";
import { Heading } from "@/components/Heading";

export default function DashboardLayout({ children }: IChildrenProps) {
  return (
    <div className="flex h-full w-full flex-col pb-6">
      <Heading>
        <TransactionAdding />
      </Heading>
      <div className="w-full py-4 px-12 flex flex-col gap-6">{children}</div>
    </div>
  );
}
