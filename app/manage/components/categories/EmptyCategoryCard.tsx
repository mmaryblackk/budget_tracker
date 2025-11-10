import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { PiggyBank, Plus } from "lucide-react";

export const EmptyCategoryCard = () => {
  return (
    <Card className="w-[200px] h-[227px] p-4 bg-background gap-1 justify-center border border-muted border-dashed shadow-md">
      <CardContent className="px-2 flex flex-col items-center gap-5">
        <PiggyBank className="w-14 h-14 text-white/80" />
        <span className="text-sm text-center text-muted-foreground">
          You don&apos;t have any income categories yet
        </span>
        <Button>
          <Plus /> Add category
        </Button>
      </CardContent>
    </Card>
  );
};
