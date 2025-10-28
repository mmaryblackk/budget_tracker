"use client";
import { cn } from "@/lib/utils";
import { TrendingDown, TrendingUp, Wallet } from "lucide-react";
import { useTheme } from "next-themes";

export const IncomeIcon = () => {
  const { theme } = useTheme();
  return (
    <TrendingUp
      className={cn(
        "w-14 h-14 p-2 bg-[#177524]/60 text-[#00D621] rounded-md",
        theme === "light" && "bg-[#CAF5C2] text-[#30BD13]"
      )}
    />
  );
};

export const ExpenseIcon = () => {
  const { theme } = useTheme();
  return (
    <TrendingDown
      className={cn(
        "w-14 h-14 p-2 bg-[#8A1413]/60 text-[#FF2826] rounded-md",
        theme === "light" && "bg-[#F5C2C2] text-[#BD1313]"
      )}
    />
  );
};

export const WalletIcon = () => {
  const { theme } = useTheme();
  return (
    <Wallet
      className={cn(
        "w-14 h-14 p-2 bg-[#6D249C]/60 text-[#C466FF] rounded-md",
        theme === "light" && "bg-[#DFC2F5] text-[#9013BD]"
      )}
    />
  );
};
