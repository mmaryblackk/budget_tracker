"use client";

import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

export const TransactionFilters = () => {
  return (
    <div className="flex justify-between">
      <Button variant="outline">Choose categories</Button>
      <Button variant="outline">
        <Download />
        Export CSV
      </Button>
    </div>
  );
};
