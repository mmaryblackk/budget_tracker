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

export const loanSchema = z.object({
  accountId: z.number().int(),
  categoryId: z.number().int(),
  name: z.string().min(1, "Name is required"),
  totalAmount: z.number().positive("Amount must be greater than 0"),
  totalMonths: z
    .number()
    .int()
    .positive("Number of months must be greater than 0"),
  firstPaymentDate: z.coerce.date(),
  interestRate: z.number().min(0).max(100).optional(),
});
