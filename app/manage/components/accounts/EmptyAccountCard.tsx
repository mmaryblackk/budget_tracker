import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollText } from "lucide-react";
import { AccountDialog } from "./AccountDialog";

export const EmptyAccountCard = () => {
  return (
    <Card className="w-[300px] h-80 border-dashed bg-accent/20 gap-5">
      <CardHeader>
        <CardTitle className="text-center text-xl">
          You don&apos;t have any accounts yet
        </CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col items-center gap-8">
        <ScrollText size={96} className="text-secondary" />
        <AccountDialog />
      </CardContent>
    </Card>
  );
};
