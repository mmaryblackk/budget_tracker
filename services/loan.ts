import { ILoan } from "@/types/interfaces";
import axios from "axios";

const LOAN_API = "http://localhost:3000/api/loans";

export const getLoans = async (): Promise<ILoan[]> => {
  const { data } = await axios.get(LOAN_API);
  return data;
};

export const addLoan = async (loan: Omit<ILoan, "id">): Promise<ILoan> => {
  const { data } = await axios.post(LOAN_API, loan);
  return data;
};
