import { PiggyBank } from "lucide-react";
import Link from "next/link";

export const Logo = () => {
  return (
    <Link href="/dashboard" className="flex items-center gap-2">
      <PiggyBank className="stroke h-11 w-11 stroke-amber-500 stroke-[1.5]" />
      <p className="bg-linear-to-r from-amber-400 to-orange-500 bg-clip-text text-3xl font-bold leading-tight tracking-tighter text-transparent">
        BudgetTracker
      </p>
    </Link>
  );
};
