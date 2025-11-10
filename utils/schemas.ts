import { z } from "zod";
import { colorsEnum } from "./colors";
import { iconsEnum } from "./icons";

export const accountSchema = z.object({
  name: z.string().min(1, { message: "Name is required" }),
  balance: z.number(),
  type: z.enum(["CASH", "CARD"], { message: "Account type is required" }),
  currency: z.enum(["UAH", "USD", "EUR"], { message: "Currency is required" }),
  banking: z.enum(["MONO", "PRIVAT", "PUMB"]).nullable(),
  owner: z.string().min(1, { message: "Owner is required" }),
});

export const categorySchema = z.object({
  name: z.string().min(1, { message: "Name is required" }),
  icon: iconsEnum.optional().refine((val) => !!val, {
    message: "Choose the icon",
  }),
  color: colorsEnum.optional().refine((val) => !!val, {
    message: "Choose the color",
  }),
  type: z.enum(["INCOME", "EXPENSE"], { message: "Choose type" }),
});
