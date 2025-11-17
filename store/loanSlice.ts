import * as loanAPI from "@/services/loan";
import { ILoan } from "@/types/interfaces";
import { StateCreator } from "zustand";
import { StoreState } from "./store";

interface State {
  loans: ILoan[];
  isLoading: boolean;
  error: string;
}

interface Actions {
  fetchLoans: () => Promise<void>;
  addLoan: (data: Omit<ILoan, "id">) => Promise<void>;
}

const initialState: State = {
  loans: [],
  isLoading: true,
  error: "",
};

export type LoanSlice = {
  loans: State & Actions;
};

export const createLoanSlice: StateCreator<
  StoreState,
  [["zustand/devtools", never], ["zustand/immer", never]],
  [],
  LoanSlice
> = (set) => ({
  loans: {
    ...initialState,

    fetchLoans: async () => {
      try {
        const loans = await loanAPI.getLoans();
        set((state) => {
          state.loans.loans = loans;
          state.loans.isLoading = false;
        });
      } catch (err: unknown) {
        set((state) => {
          state.loans.isLoading = false;
          state.loans.error =
            err instanceof Error ? err.message : "Unknown error";
        });
      }
    },

    addLoan: async (data) => {
      try {
        const newLoan = await loanAPI.addLoan(data);
        set((state) => {
          state.loans.isLoading = true;
          state.loans.loans.push(newLoan);
        });
      } catch (err: unknown) {
        set((state) => {
          state.loans.isLoading = false;
          state.loans.error =
            err instanceof Error ? err.message : "Unknown error";
        });
      } finally {
        set((state) => {
          state.loans.isLoading = false;
        });
      }
    },
  },
});
