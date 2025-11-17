import { TColor } from "@/utils/colors";
import { TIcon } from "@/utils/icons";
import { JSX, ReactNode } from "react";

export interface IChildrenProps {
  children: ReactNode;
}

export type TCurrency = "UAH" | "USD" | "EUR";
export type TBanking = "MONO" | "PRIVAT" | "PUMB";
export type TTransaction = "INCOME" | "EXPENSE";

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
  key: TTransaction | "BALANCE";
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
  banking: TBanking | null;
  owner: string;
}

export interface ILoan {
  id: number;
  accountId: number;
  categoryId: number;
  name: string;
  totalAmount: number;
  totalMonths: number;
  firstPaymentDate: string;
  interestRate?: number;
}

export interface ICategory {
  id: number;
  name: string;
  icon: TIcon;
  color: TColor;
  type: TTransaction;
}

export interface ITransaction {
  id: number;
  account_id: number;
  category_id?: number;
  type: TTransaction | "TRANSFER";
  commission?: number;
  amount: number;
  description?: string;
  date: string;
  currency: TCurrency;
}
