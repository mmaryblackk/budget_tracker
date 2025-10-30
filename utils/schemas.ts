import z from "zod";

export const accountSchema = z.object({
  name: z.string().min(1, { message: "Name is required" }),
  balance: z.number(),
  type: z.enum(["CASH", "CARD"], { message: "Account type is required" }),
  currency: z.enum(["UAH", "USD", "EUR"], { message: "Currency is required" }),
  banking: z.enum(["MONO", "PRIVAT", "PUMB"]).nullable(),
  owner: z.string().min(1, { message: "Owner is required" }),
});
