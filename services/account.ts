import { IAccount } from "@/types/interfaces";
import axios from "axios";

const ACCOUNT_API = "http://localhost:3000/api/accounts";

export const getAccounts = async (): Promise<IAccount[]> => {
  const { data } = await axios.get(ACCOUNT_API);
  return data;
};

export const addAccount = async (
  account: Omit<IAccount, "id">
): Promise<IAccount> => {
  const { data } = await axios.post(ACCOUNT_API, account);
  return data;
};

export const updateAccount = async (
  id: number,
  account: Partial<IAccount>
): Promise<IAccount> => {
  const { data } = await axios.patch(`${ACCOUNT_API}/${id}`, account);
  return data;
};

export const deleteAccount = async (id: number): Promise<void> => {
  await axios.delete(`${ACCOUNT_API}/${id}`);
};
