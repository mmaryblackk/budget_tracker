import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Skeleton } from "@/components/ui/skeleton";

export const CategoryCardSkeleton = () => {
  return (
    <Card className="w-[200px] h-[227px] p-4 bg-background gap-1 border-muted shadow-md">
      <CardContent className="px-2 flex flex-col items-center gap-3">
        <div className="flex flex-col items-center gap-4">
          <Skeleton className="w-[88px] h-[88px] rounded-2xl" />
          <Skeleton className="w-[120px] h-7" />
        </div>

        <Separator />
        <div className="flex gap-12 items-center">
          <Skeleton className="w-[60px] h-9" />
          <Skeleton className="w-[42px] h-9" />
        </div>
      </CardContent>
    </Card>
  );
};
