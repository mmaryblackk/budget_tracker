import * as accountAPI from "@/services/account";
import { IAccount } from "@/types/interfaces";
import { StateCreator } from "zustand";
import { StoreState } from "./store";

interface State {
  accounts: IAccount[];
  updatingId: number | null;
  isLoading: boolean;
  error: string;
}

interface Actions {
  fetchAccounts: () => Promise<void>;
  addAccount: (data: Omit<IAccount, "id">) => Promise<void>;
  updateAccount: (id: number, data: Omit<IAccount, "id">) => Promise<void>;
  deleteAccount: (id: number) => Promise<void>;
}

const initialState: State = {
  accounts: [],
  updatingId: null,
  isLoading: true,
  error: "",
};

export type AccountSlice = {
  accounts: State & Actions;
};

// TO-DO: updated isLoading logic on every func

export const createAccountSlice: StateCreator<
  StoreState,
  [["zustand/devtools", never], ["zustand/immer", never]],
  [],
  AccountSlice
> = (set) => ({
  accounts: {
    ...initialState,

    fetchAccounts: async () => {
      try {
        const accounts = await accountAPI.getAccounts();
        set((state) => {
          state.accounts.accounts = accounts;
          state.accounts.isLoading = false;
        });
      } catch (err: unknown) {
        set((state) => {
          state.accounts.isLoading = false;
          state.accounts.error =
            err instanceof Error ? err.message : "Unknown error";
        });
      }
    },

    addAccount: async (data) => {
      try {
        const newAccount = await accountAPI.addAccount(data);
        set((state) => {
          state.accounts.accounts.push(newAccount);
        });
      } catch (err: unknown) {
        set((state) => {
          state.accounts.error =
            err instanceof Error ? err.message : "Unknown error";
        });
      }
    },

    updateAccount: async (id, data) => {
      try {
        set((state) => {
          state.accounts.updatingId = id;
        });

        const updated = await accountAPI.updateAccount(id, data);
        set((state) => {
          const index = state.accounts.accounts.findIndex(
            (account: IAccount) => account.id === id
          );
          if (index !== -1) state.accounts.accounts[index] = updated;
          state.accounts.updatingId = null;
        });
      } catch (err: unknown) {
        set((state) => {
          state.accounts.updatingId = null;
          state.accounts.error =
            err instanceof Error ? err.message : "Unknown error";
        });
      }
    },

    deleteAccount: async (id) => {
      try {
        set((state) => {
          state.accounts.isLoading = true;
        });

        await accountAPI.deleteAccount(id);

        set((state) => {
          state.accounts.accounts = state.accounts.accounts.filter(
            (account: IAccount) => account.id !== id
          );
          state.accounts.isLoading = false;
        });
      } catch (err: unknown) {
        set((state) => {
          state.accounts.isLoading = false;
          state.accounts.error =
            err instanceof Error ? err.message : "Unknown error";
        });
      }
    },
  },
});
