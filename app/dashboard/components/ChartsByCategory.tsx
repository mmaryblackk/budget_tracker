import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const ChartsByCategory = () => {
  return (
    <div className="grid grid-cols-2 gap-6">
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl text-muted-foreground">
            Incomes by category
          </CardTitle>
        </CardHeader>
        <CardContent className="h-[400px] flex flex-col justify-center items-center gap-2">
          <span className="font-medium">No data for the selected period</span>
          <span className="text-muted-foreground">
            Try selecting a different period or try adding new incomes
          </span>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl text-muted-foreground">
            Expenses by category
          </CardTitle>
        </CardHeader>
        <CardContent className="h-[400px] flex flex-col justify-center items-center gap-2">
          <span className="font-medium">No data for the selected period</span>
          <span className="text-muted-foreground">
            Try selecting a different period or try adding new expenses
          </span>
        </CardContent>
      </Card>
    </div>
  );
};
