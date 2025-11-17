import { addMonths, format } from "date-fns";

export const countMadePayments = (
  firstPaymentDateStr: string,
  currentDateStr?: string
): number => {
  const firstDate = new Date(firstPaymentDateStr);
  const currentDate = currentDateStr ? new Date(currentDateStr) : new Date();

  let months =
    (currentDate.getFullYear() - firstDate.getFullYear()) * 12 +
    (currentDate.getMonth() - firstDate.getMonth());

  if (currentDate.getDate() >= firstDate.getDate()) {
    months += 1;
  }

  return Math.max(months, 0);
};

export const nextPaymentDate = (paymentDate: string, paidMonths: number) => {
  const date = new Date(paymentDate);
  const newDate = addMonths(date, paidMonths);
  return format(newDate, "yyyy-MM-dd'T'HH:mm:ss");
};
