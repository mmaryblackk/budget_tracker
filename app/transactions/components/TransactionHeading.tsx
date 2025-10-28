import { DatePicker } from "@/components/DatePicker";

export const TransactionHeading = () => {
  return (
    <>
      <h2 className="font-bold text-3xl">Transaction History</h2>
      <DatePicker />
    </>
  );
};
