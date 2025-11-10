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
import { categorySchema } from "@/utils/schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { Plus } from "lucide-react";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import z from "zod";
import { ColorPicker } from "./components/ColorPicker";
import { IconPicker } from "./components/IconPicker";
import { cn } from "@/lib/utils";
import { useStore } from "@/store/store";
import { ICategory } from "@/types/interfaces";
import { toast } from "sonner";

export type TCategorySchemaValues = z.infer<typeof categorySchema>;

interface ICategoryDialogProps {
  category?: ICategory;
}

export const CategoryDialog = ({ category }: ICategoryDialogProps) => {
  const [open, setOpen] = useState(false);
  const { addCategory, updateCategory } = useStore((state) => state.categories);

  const categoryForm = useForm<TCategorySchemaValues>({
    resolver: zodResolver(categorySchema),
    mode: "onSubmit",
    defaultValues: {
      name: category?.name ?? "",
      icon: category?.icon ?? undefined,
      color: category?.color ?? undefined,
      type: category?.type ?? undefined,
    },
  });

  useEffect(() => {
    if (category) {
      categoryForm.reset({
        name: category.name,
        icon: category.icon,
        color: category.color,
        type: category.type,
      });
    } else {
      categoryForm.reset({
        name: "",
        icon: undefined,
        color: undefined,
        type: undefined,
      });
    }
  }, [category, categoryForm]);

  const onSubmit = (values: TCategorySchemaValues) => {
    if (category) {
      updateCategory(category.id, values as ICategory);
      toast.success("Category has been updated successfully!");
    } else {
      addCategory(values as ICategory);
      toast.success("Category has been created successfully!");
    }
    categoryForm.reset();
    setOpen(false);
  };

  return (
    <Dialog
      open={open}
      onOpenChange={(isOpen) => {
        setOpen(isOpen);
        if (!isOpen) {
          categoryForm.reset();
        }
      }}
    >
      <DialogTrigger asChild>
        {category ? (
          <Button variant="outline">Edit</Button>
        ) : (
          <Button variant="outline" size="lg" className="text-md">
            <Plus />
            Add category
          </Button>
        )}
      </DialogTrigger>

      <DialogContent onOpenAutoFocus={(e) => e.preventDefault()}>
        <DialogHeader>
          <DialogTitle>Create new category</DialogTitle>
          <DialogDescription>
            Fill out the details below to create a new category.
          </DialogDescription>
        </DialogHeader>
        <Form {...categoryForm}>
          <form
            onSubmit={categoryForm.handleSubmit(onSubmit)}
            className="flex flex-col gap-4 pb-4"
          >
            <div className="grid grid-cols-3 gap-6 items-start">
              <FormField
                control={categoryForm.control}
                name="name"
                render={({ field }) => (
                  <FormItem className="col-span-2">
                    <FormLabel>Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Type here" {...field} />
                    </FormControl>
                    {categoryForm.formState.errors.name ? (
                      <FormMessage className="text-xs" />
                    ) : (
                      <FormDescription className="text-xs">
                        Provide name for category
                      </FormDescription>
                    )}
                  </FormItem>
                )}
              />
              <FormField
                control={categoryForm.control}
                name="type"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Type</FormLabel>
                    <FormControl>
                      <Select
                        value={field.value}
                        onValueChange={field.onChange}
                      >
                        <SelectTrigger
                          className={cn(
                            "w-full",
                            categoryForm.formState.errors.type &&
                              "border-destructive"
                          )}
                        >
                          <SelectValue placeholder="Select type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="INCOME">Income</SelectItem>
                          <SelectItem value="EXPENSE">Expense</SelectItem>
                        </SelectContent>
                      </Select>
                    </FormControl>
                    <FormMessage className="text-xs" />
                  </FormItem>
                )}
              />
            </div>
            <FormField
              control={categoryForm.control}
              name="color"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Color</FormLabel>
                  <FormControl>
                    <ColorPicker
                      value={field.value}
                      onChange={(val) => {
                        field.onChange(val);
                        if (categoryForm.formState.errors.color) {
                          categoryForm.clearErrors("color");
                        }
                      }}
                      hasError={!!categoryForm.formState.errors.color}
                    />
                  </FormControl>
                  {categoryForm.formState.errors.color ? (
                    <FormMessage className="text-xs" />
                  ) : (
                    <FormDescription className="text-xs">
                      Choose background color for your category
                    </FormDescription>
                  )}
                </FormItem>
              )}
            />
            <FormField
              control={categoryForm.control}
              name="icon"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Icon</FormLabel>
                  <FormControl>
                    <IconPicker
                      value={field.value}
                      onChange={(val) => {
                        field.onChange(val);
                        if (categoryForm.formState.errors.color) {
                          categoryForm.clearErrors("color");
                        }
                      }}
                      hasError={!!categoryForm.formState.errors.icon}
                    />
                  </FormControl>
                  {categoryForm.formState.errors.icon ? (
                    <FormMessage className="text-xs" />
                  ) : (
                    <FormDescription className="text-xs">
                      Choose icon for your category
                    </FormDescription>
                  )}
                </FormItem>
              )}
            />
            <DialogFooter className="gap-4">
              <DialogClose asChild>
                <Button variant="outline">Cancel</Button>
              </DialogClose>

              <Button type="submit">{category ? "Update" : "Create"}</Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};
