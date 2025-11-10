import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";
import { createAccountSlice, AccountSlice } from "./accountSlice";
import { createCategorySlice, CategorySlice } from "./categorySlice";

export type StoreState = AccountSlice & CategorySlice;

export const useStore = create<StoreState>()(
  devtools(
    immer((...a) => ({
      ...createAccountSlice(...a),
      ...createCategorySlice(...a),
    })),
    { name: "store" }
  )
);
