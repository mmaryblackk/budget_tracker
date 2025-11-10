"use client";
import { useStore } from "@/store/store";
import { CategoryCard } from "./CategoryCard";
import { CategoryCardSkeleton } from "./CategoryCardSkeleton";
import { CategoryDialog } from "./CategoryDialog";
import { EmptyCategoryCard } from "./EmptyCategoryCard";

export const CategoriesManagement = () => {
  const { isLoading, incomeCategories, expenseCategories, updatingId } =
    useStore((state) => state.categories);

  return (
    <>
      <div className="flex justify-between items-center">
        <h2 className="font-bold text-4xl pt-2">Your categories</h2>
        <CategoryDialog />
      </div>
      <div className="flex flex-col gap-2">
        <h4 className="text-2xl text-muted-foreground font-semibold">
          Income categories
        </h4>
        <div className="flex flex-wrap gap-6">
          {isLoading ? (
            Array.from({ length: 4 }).map((_, index) => (
              <CategoryCardSkeleton key={index} />
            ))
          ) : incomeCategories.length === 0 ? (
            <EmptyCategoryCard />
          ) : (
            incomeCategories.map((category) =>
              category.id === updatingId ? (
                <CategoryCardSkeleton key={category.id} />
              ) : (
                <CategoryCard key={category.id} category={category} />
              )
            )
          )}
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <h4 className="text-2xl text-muted-foreground font-semibold">
          Expense categories
        </h4>
        <div className="flex flex-wrap gap-6">
          {isLoading ? (
            Array.from({ length: 4 }).map((_, index) => (
              <CategoryCardSkeleton key={index} />
            ))
          ) : expenseCategories.length === 0 ? (
            <EmptyCategoryCard />
          ) : (
            expenseCategories.map((category) =>
              category.id === updatingId ? (
                <CategoryCardSkeleton key={category.id} />
              ) : (
                <CategoryCard key={category.id} category={category} />
              )
            )
          )}
        </div>
      </div>
    </>
  );
};
