import { currencyMap, TCurrency } from "@/types/interfaces";

export const formatString = (str: string) => {
  return str.at(0) + str.slice(1).toLowerCase();
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
