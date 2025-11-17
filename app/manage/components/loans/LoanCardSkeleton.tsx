import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { Separator } from "@/components/ui/separator";

export function LoanCardSkeleton() {
  return (
    <Card className="w-[300px] gap-2 animate-pulse">
      <CardHeader className="gap-3">
        <CardTitle className="flex justify-between items-center">
          <Skeleton className="h-6 w-[150px]" />
          <div className="flex items-center gap-2">
            <Skeleton className="w-8 h-8 rounded-full" />
            <Skeleton className="w-8 h-8 rounded-full" />
          </div>
        </CardTitle>
      </CardHeader>
      <CardContent className="px-6 flex flex-col gap-5">
        <div className="flex flex-col gap-3 text-lg">
          <div className="flex justify-between">
            <Skeleton className="h-6 w-[120px]" />
            <Skeleton className="h-6 w-20" />
          </div>
          <div className="flex justify-between">
            <Skeleton className="h-6 w-[120px]" />
            <Skeleton className="h-6 w-[30px]" />
          </div>
        </div>
        <Skeleton className="h-4 w-full rounded-full" />
        <div className="flex flex-col gap-3 text-lg">
          <div className="flex justify-between">
            <Skeleton className="h-6 w-[120px]" />
            <Skeleton className="h-6 w-20" />
          </div>
          <div className="flex justify-between">
            <Skeleton className="h-6 w-[120px]" />
            <Skeleton className="h-6 w-[30px]" />
          </div>
        </div>
        <Separator />
        <div className="flex flex-col gap-3 text-lg">
          <div className="flex justify-between">
            <Skeleton className="h-6 w-[120px]" />
            <Skeleton className="h-6 w-24" />
          </div>
          <div className="flex justify-between">
            <Skeleton className="h-6 w-[120px]" />
            <Skeleton className="h-6 w-24" />
          </div>
        </div>
        <Separator />
        <div className="flex justify-between items-center">
          <Skeleton className="h-9 w-[110px] rounded-md" />
          <Skeleton className="h-9 w-[100px] rounded-md" />
        </div>
      </CardContent>
    </Card>
  );
}
