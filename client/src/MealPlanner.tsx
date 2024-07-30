import 'flowbite/dist/flowbite.css';
import WeekCards from './WeekCards';
import CostOfWeek from './CostOfWeek';

function MealPlanner() {
  const budget = "$500";
  const totalCost = "$300";

  return (
    <div className="min-h-screen bg-yellow-300 p-4 flex flex-col items-center">
      <div className="space-y-4">
      <CostOfWeek budget={budget} totalCost={totalCost} />
        <WeekCards />
       
      </div>
    </div>
  );
}

export default MealPlanner;
