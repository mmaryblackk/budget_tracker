import { TIcons } from "@/utils/icons";
import { JSX, ReactNode } from "react";

export interface IChildrenProps {
  children: ReactNode;
}

export type TCurrency = "UAH" | "USD" | "EUR";
export type TBanking = "MONO" | "PRIVAT" | "PUMB";

export const bankingMap: Record<TBanking, string> = {
  MONO: "/assets/icons/monobank-logo.png",
  PRIVAT: "/assets/icons/pryvat-logo.png",
  PUMB: "/assets/icons/pumb-logo.png",
};

export const currencyMap: Record<TCurrency, string> = {
  USD: "$",
  EUR: "€",
  UAH: "₴",
};

export interface ITotals {
  key: "INCOME" | "EXPENSE" | "BALANCE";
  label: string;
  icon: () => JSX.Element;
  amount: number;
}

export interface IAccount {
  id: number;
  name: string;
  balance: number;
  type: "CARD" | "CASH";
  currency: TCurrency;
  banking?: TBanking;
  owner: string;
}

export interface ICategory {
  id: number;
  name: string;
  icon: TIcons;
  color: string;
  type: "INCOME" | "EXPENSE" | "TRANSFER";
}

export interface ITransaction {
  id: number;
  account_id: number;
  category_id?: number;
  type: "INCOME" | "EXPENSE" | "TRANSFER";
  commission?: number;
  amount: number;
  description?: string;
  date: string;
  currency: TCurrency;
}

export interface ILoan {
  id: number;
  account_id: number;
  category_id: number;
  name: string;
  totalAmount: number;
  totalPayments: number;
  monthPaid: number;
}
