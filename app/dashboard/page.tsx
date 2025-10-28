import { ChartsByCategory } from "./components/ChartsByCategory";
import { ChartsByDate } from "./components/ChartsByDate";
import { DashboardFilters } from "./components/DashboardFilters";
import { Totals } from "./components/Totals";

function DashboardPage() {
  return (
    <>
      <div className="flex justify-between items-center">
        <h2 className="font-bold text-4xl pt-2">Overview</h2>
        <DashboardFilters />
      </div>
      <Totals />
      <ChartsByCategory />
      <div className="flex flex-col gap-4">
        <h2 className="font-bold text-4xl pt-2">History</h2>
        <ChartsByDate />
      </div>
    </>
  );
}

export default DashboardPage;
