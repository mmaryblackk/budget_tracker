"use client";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

export const ChartsByDate = () => {
  return (
    <Card className="p-4">
      <CardHeader className="flex gap-4 justify-end items-center pt-2">
        <Badge
          variant="outline"
          className="flex items-center gap-2 text-md px-3"
        >
          <div className="w-4 h-4 bg-[#00D621]/70 rounded-full" />
          <span className="text-muted-foreground">Income</span>
        </Badge>
        <Badge
          variant="outline"
          className="flex items-center gap-2 text-md px-3"
        >
          <div className="w-4 h-4 bg-[#FF2826]/80 rounded-full" />
          <span className="text-muted-foreground">Expense</span>
        </Badge>
      </CardHeader>
      <CardContent className="bg-background border border-muted rounded-md p-4 h-[400px] flex flex-col gap-2 justify-center items-center">
        <span className="font-medium">No data for the selected period</span>
        <span className="text-muted-foreground">
          Try selecting a different period or try adding new expenses
        </span>
      </CardContent>
    </Card>
  );
};
