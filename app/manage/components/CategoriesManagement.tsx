import { mockCategories } from "@/utils/mockadata";
import { CategoryCard, EmptyCategoryCard } from "./CategoryCard";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";

export const CategoriesManagement = () => {
  const incomeCategories = mockCategories.filter(
    (category) => category.type === "INCOME"
  );

  const expenseCategories = mockCategories.filter(
    (category) => category.type === "EXPENSE"
  );
  return (
    <>
      <div className="flex justify-between items-center">
        <h2 className="font-bold text-4xl pt-2">Your categories</h2>
        <Button variant="outline" size="lg" className="text-md">
          <Plus />
          Add category
        </Button>
      </div>
      <div className="flex flex-col gap-2">
        <h4 className="text-2xl text-muted-foreground font-semibold">
          Income categories
        </h4>
        <div className="flex flex-wrap gap-6">
          {incomeCategories.length === 0 && <EmptyCategoryCard />}
          {incomeCategories.map((category) => (
            <CategoryCard key={category.id} category={category} />
          ))}
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <h4 className="text-2xl text-muted-foreground font-semibold">
          Expense categories
        </h4>
        <div className="flex flex-wrap gap-6">
          {expenseCategories.length === 0 && <EmptyCategoryCard />}
          {expenseCategories.map((category) => (
            <CategoryCard key={category.id} category={category} />
          ))}
        </div>
      </div>
    </>
  );
};
