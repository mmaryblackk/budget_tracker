"use client";

import { DatePicker } from "@/components/DatePicker";
import { Button } from "@/components/ui/button";

export const DashboardFilters = () => {
  return (
    <div className="flex gap-6">
      <Button variant="outline" size="lg">
        Choose accounts
      </Button>
      <DatePicker />
    </div>
  );
};
