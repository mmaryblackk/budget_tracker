import { create } from "zustand";
import { AccountSlice, createAccountSlice } from "./accountSlice";

// import { createUserSlice, UserSlice } from "./userSlice"; // приклад

// Типізація для всіх slice'ів
type StoreState = AccountSlice; // | UserSlice | CartSlice і т.д.

export const useStore = create<StoreState>()((...a) => ({
  ...createAccountSlice(...a),
  // ...createUserSlice(...a),
}));
