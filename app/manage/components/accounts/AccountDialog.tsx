"use client";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Spinner } from "@/components/ui/spinner";
import { useStore } from "@/store/store";
import { IAccount } from "@/types/interfaces";
import { zodResolver } from "@hookform/resolvers/zod";
import { Plus } from "lucide-react";
import { useEffect, useState } from "react";
import { useForm, useWatch } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";

const accountFormSchema = z.object({
  name: z.string().min(1, { message: "Name is required" }),
  balance: z.coerce.number({
    message: "Enter valid initial balance",
  }) as unknown as number,
  type: z.enum(["CASH", "CARD"], { message: "Account type is required" }),
  currency: z.enum(["UAH", "USD", "EUR"], { message: "Currency is required" }),
  banking: z.enum(["MONO", "PRIVAT", "PUMB"]).nullable(),
  owner: z.string().min(1, { message: "Owner is required" }),
});

export type TAccountSchemaValues = z.infer<typeof accountFormSchema>;

interface IAccountDialogProps {
  account?: IAccount;
}

export function AccountDialog({ account }: IAccountDialogProps) {
  const [open, setOpen] = useState(false);
  const { isLoading, addAccount, updateAccount } = useStore(
    (state) => state.accounts
  );
  const accountForm = useForm<TAccountSchemaValues>({
    resolver: zodResolver(accountFormSchema),
    mode: "onSubmit",
    defaultValues: {
      name: account?.name ?? "",
      balance: account?.balance ?? 0,
      type: account?.type ?? "CASH",
      currency: account?.currency ?? "UAH",
      banking: account?.banking ?? null,
      owner: account?.owner ?? "",
    },
  });
  useEffect(() => {
    if (account) {
      accountForm.reset({
        name: account.name,
        balance: account.balance,
        type: account.type,
        currency: account.currency,
        banking: account.banking,
        owner: account.owner,
      });
    } else {
      accountForm.reset({
        name: "",
        balance: 0,
        type: "CASH",
        currency: "UAH",
        banking: null,
        owner: "",
      });
    }
  }, [account, accountForm]);

  const onSubmit = (values: TAccountSchemaValues) => {
    if (isNaN(Number(values.balance))) {
      accountForm.setError("balance", {
        type: "manual",
        message: "Enter valid initial balance",
      });
      return;
    }
    if (account) {
      updateAccount(account.id, {
        ...values,
        balance: Number(values.balance),
      });
      toast.success("Account has been updated successfully!");
      accountForm.reset();
      setOpen(false);
      return;
    }

    addAccount({
      ...values,
      balance: Number(values.balance),
      banking: type === "CASH" ? null : values.banking,
    });
    toast.success("Account has been created successfully!");
    accountForm.reset();
    setOpen(false);
  };
  const type = useWatch({
    control: accountForm.control,
    name: "type",
  });

  return (
    <Dialog
      open={open}
      onOpenChange={(isOpen) => {
        setOpen(isOpen);
        if (!isOpen) {
          accountForm.reset();
        }
      }}
    >
      <DialogTrigger asChild>
        {account ? (
          <Button variant="outline">Edit</Button>
        ) : (
          <Button variant="outline" size="lg" className="text-md">
            <Plus />
            Create new
          </Button>
        )}
      </DialogTrigger>
      <DialogContent onOpenAutoFocus={(e) => e.preventDefault()}>
        <DialogHeader>
          <DialogTitle>Set Up Your Account</DialogTitle>
          <DialogDescription>
            Fill out the details below to create a new account.
          </DialogDescription>
        </DialogHeader>

        <Form {...accountForm}>
          <form
            onSubmit={accountForm.handleSubmit(onSubmit)}
            className="flex flex-col gap-4 pb-4"
          >
            <FormField
              control={accountForm.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Type here" {...field} />
                  </FormControl>
                  {accountForm.formState.errors.name ? (
                    <FormMessage className="text-xs" />
                  ) : (
                    <FormDescription className="text-xs">
                      Provide name of your account
                    </FormDescription>
                  )}
                </FormItem>
              )}
            />
            <FormField
              control={accountForm.control}
              name="owner"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Owner</FormLabel>
                  <FormControl>
                    <Input placeholder="Type here" {...field} />
                  </FormControl>

                  {accountForm.formState.errors.owner ? (
                    <FormMessage className="text-xs" />
                  ) : (
                    <FormDescription className="text-xs">
                      Provide name of the owner
                    </FormDescription>
                  )}
                </FormItem>
              )}
            />
            <FormField
              control={accountForm.control}
              name="balance"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Balance</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Enter amount"
                      type="number"
                      className="[appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                      value={field.value === 0 ? "" : (field.value as string)}
                      onChange={(e) => field.onChange(e.target.value)}
                    />
                  </FormControl>
                  {accountForm.formState.errors.balance ? (
                    <FormMessage className="text-xs" />
                  ) : (
                    <FormDescription className="text-xs">
                      Provide initial balance. Empty field will be considered as
                      0.00
                    </FormDescription>
                  )}
                </FormItem>
              )}
            />
            <FormField
              control={accountForm.control}
              name="currency"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Currency</FormLabel>
                  <FormControl>
                    <Select value={field.value} onValueChange={field.onChange}>
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Select currency" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="UAH">₴, UAH</SelectItem>
                        <SelectItem value="USD">$, USD</SelectItem>
                        <SelectItem value="EUR">€, EUR</SelectItem>
                      </SelectContent>
                    </Select>
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="grid grid-cols-2 gap-4">
              <FormField
                control={accountForm.control}
                name="type"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Type</FormLabel>
                    <FormControl>
                      <Select
                        value={field.value}
                        onValueChange={(val) => {
                          field.onChange(val);
                          if (val === "CASH") {
                            accountForm.setValue("banking", null);
                          }
                        }}
                      >
                        <SelectTrigger className="w-full">
                          <SelectValue placeholder="Select type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="CARD">Card</SelectItem>
                          <SelectItem value="CASH">Cash</SelectItem>
                        </SelectContent>
                      </Select>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              {type === "CARD" && (
                <FormField
                  control={accountForm.control}
                  name="banking"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Bank</FormLabel>
                      <FormControl>
                        <Select
                          value={field.value ?? undefined}
                          onValueChange={(val) => field.onChange(val || null)}
                        >
                          <SelectTrigger className="w-full">
                            <SelectValue placeholder="Select bank" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="MONO">Mono</SelectItem>
                            <SelectItem value="PRIVAT">ПриватБанк</SelectItem>
                            <SelectItem value="PUMB">ПУМБ</SelectItem>
                          </SelectContent>
                        </Select>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              )}
            </div>
            <DialogFooter className="gap-4">
              <DialogClose asChild>
                <Button variant="outline">Cancel</Button>
              </DialogClose>

              <Button type="submit">
                {account ? (
                  "Edit account"
                ) : isLoading ? (
                  <Spinner />
                ) : (
                  "Create account"
                )}
              </Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
