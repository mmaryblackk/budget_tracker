import * as categoryAPI from "@/services/category";
import { ICategory } from "@/types/interfaces";
import { StateCreator } from "zustand";
import { StoreState } from "./store";

interface State {
  categories: ICategory[];
  updatingId: number | null;
  incomeCategories: ICategory[];
  expenseCategories: ICategory[];
  isLoading: boolean;
  error: string;
}

interface Actions {
  fetchCategories: () => Promise<void>;
  addCategory: (data: Omit<ICategory, "id">) => Promise<void>;
  updateCategory: (id: number, data: Omit<ICategory, "id">) => Promise<void>;
  deleteCategory: (id: number) => Promise<void>;
  setIncomeCategories: () => void;
  setExpenseCategories: () => void;
}

const initialState: State = {
  categories: [],
  updatingId: null,
  incomeCategories: [],
  expenseCategories: [],
  isLoading: true,
  error: "",
};

export type CategorySlice = {
  categories: State & Actions;
};

export const createCategorySlice: StateCreator<
  StoreState,
  [["zustand/devtools", never], ["zustand/immer", never]],
  [],
  CategorySlice
> = (set, get) => ({
  categories: {
    ...initialState,

    fetchCategories: async () => {
      try {
        const categories = await categoryAPI.getCategories();
        set((state) => {
          state.categories.categories = categories;
          state.categories.isLoading = false;
        });
        get().categories.setIncomeCategories();
        get().categories.setExpenseCategories();
      } catch (err: unknown) {
        set((state) => {
          state.categories.isLoading = false;
          state.categories.error =
            err instanceof Error ? err.message : "Unknown error";
        });
      }
    },

    addCategory: async (data) => {
      try {
        const newCategory = await categoryAPI.addCategory(data);
        set((state) => {
          state.categories.categories.push(newCategory);
        });
        get().categories.setIncomeCategories();
        get().categories.setExpenseCategories();
      } catch (err: unknown) {
        set((state) => {
          state.categories.error =
            err instanceof Error ? err.message : "Unknown error";
        });
      }
    },

    updateCategory: async (id, data) => {
      try {
        set((state) => {
          state.categories.updatingId = id;
        });

        const updated = await categoryAPI.updateCategory(id, data);
        set((state) => {
          const index = state.categories.categories.findIndex(
            (category: ICategory) => category.id === id
          );
          if (index !== -1) state.categories.categories[index] = updated;
          state.categories.updatingId = null;
        });
        get().categories.setIncomeCategories();
        get().categories.setExpenseCategories();
      } catch (err: unknown) {
        set((state) => {
          state.categories.updatingId = null;
          state.categories.error =
            err instanceof Error ? err.message : "Unknown error";
        });
      }
    },

    deleteCategory: async (id) => {
      try {
        await categoryAPI.deleteCategory(id);
        set((state) => {
          state.categories.categories = state.categories.categories.filter(
            (category: ICategory) => category.id !== id
          );
        });
        get().categories.setIncomeCategories();
        get().categories.setExpenseCategories();
      } catch (err: unknown) {
        set((state) => {
          state.categories.error =
            err instanceof Error ? err.message : "Unknown error";
        });
      }
    },

    setIncomeCategories: () => {
      set((state) => {
        state.categories.incomeCategories = state.categories.categories.filter(
          (category: ICategory) => category.type === "INCOME"
        );
      });
    },

    setExpenseCategories: () => {
      set((state) => {
        state.categories.expenseCategories = state.categories.categories.filter(
          (category: ICategory) => category.type === "EXPENSE"
        );
      });
    },
  },
});
