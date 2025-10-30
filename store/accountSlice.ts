import * as accountAPI from "@/services/account";
import { IAccount } from "@/types/interfaces";
import { StateCreator } from "zustand";

export interface AccountSlice {
  isLoading: boolean;
  error: string | null;
  accounts: IAccount[];
  updatingId: number | null;
  fetchAccounts: () => Promise<void>;
  addAccount: (data: Omit<IAccount, "id">) => Promise<void>;
  updateAccount: (id: number, data: Partial<IAccount>) => Promise<void>;
  deleteAccount: (id: number) => Promise<void>;
}

export const createAccountSlice: StateCreator<AccountSlice> = (set) => ({
  accounts: [],
  updatingId: null,
  isLoading: true,
  error: null,

  fetchAccounts: async () => {
    try {
      const accounts = await accountAPI.getAccounts();
      set({ accounts, isLoading: false });
    } catch (err: unknown) {
      if (err instanceof Error) {
        set({ error: err.message, isLoading: false });
      } else {
        set({ error: "Unknown error", isLoading: false });
      }
    }
  },

  addAccount: async (data) => {
    try {
      const newAccount = await accountAPI.addAccount(data);
      set((state) => ({
        accounts: [...state.accounts, newAccount],
        isLoading: false,
      }));
    } catch (err: unknown) {
      if (err instanceof Error) {
        set({ error: err.message, isLoading: false });
      } else {
        set({ error: "Unknown error", isLoading: false });
      }
    }
  },
  updateAccount: async (id, data) => {
    try {
      set({ updatingId: id });
      const updated = await accountAPI.updateAccount(id, data);
      set((state) => ({
        accounts: state.accounts.map((acc) => (acc.id === id ? updated : acc)),
        updatingId: null,
      }));
    } catch (err: unknown) {
      set({ updatingId: null });
      if (err instanceof Error) {
        set({ error: err.message, isLoading: false });
      } else {
        set({ error: "Unknown error", isLoading: false });
      }
    }
  },

  deleteAccount: async (id) => {
    try {
      await accountAPI.deleteAccount(id);
      set((state) => ({
        accounts: state.accounts.filter((acc) => acc.id !== id),
        isLoading: false,
      }));
    } catch (err: unknown) {
      if (err instanceof Error) {
        set({ error: err.message, isLoading: false });
      } else {
        set({ error: "Unknown error", isLoading: false });
      }
    }
  },
});
