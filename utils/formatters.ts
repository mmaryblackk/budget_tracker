import { currencyMap, TCurrency } from "@/types/interfaces";

export const formatString = (str: string) => {
  if (!str) return "";
  return str
    .replace(/[_-]+/g, " ")
    .toLowerCase()
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
};

export const formatDate = (
  dateString: string,
  locale: string = "default"
): string => {
  const date = new Date(dateString);

  return date.toLocaleDateString(locale, {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
};

export const formatAmount = (currency: TCurrency, amount: number) => {
  return `${currencyMap[currency] || ""}${amount.toLocaleString("uk-UA", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  })}`;
};

export const formatCamelCase = (str: string): string => {
  if (!str) return "";
  return str
    .replace(/([a-z])([A-Z])/g, "$1 $2")
    .replace(/^./, (s) => s.toUpperCase());
};
