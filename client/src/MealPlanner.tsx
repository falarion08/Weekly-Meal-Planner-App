import { useState } from 'react';
import 'flowbite/dist/flowbite.css';
import WeekCards from './WeekCards';
import CostOfWeek from './CostOfWeek';
import { Button } from 'flowbite-react';
import CreateMealPlan from './CreateMealPlan';

function MealPlanner() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const budget = "$500";
  const totalCost = "$300";

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div className="min-h-screen p-4 flex flex-col items-center relative">
      <h1 className="text-3xl font-bold mb-4">Weekly Meal Planner</h1>
      <div className="w-full flex flex-col items-center">
        
        <CostOfWeek budget={budget} totalCost={totalCost} />
        <div className="flex justify-center w-full mt-2">
          <Button className="bg-yellow-200 text-black" onClick={toggleModal}>
            Create Meal Plan
          </Button>
        </div>

        {isModalOpen && (
          <>
            <div className="fixed inset-0 bg-gray-800 bg-opacity-50 z-40"></div>
            <div className="fixed inset-0 flex justify-center items-center z-50">
              <div className="bg-white p-4 rounded shadow-lg">
                <CreateMealPlan />
                <Button className="bg-yellow-200 text-black mt-2" onClick={toggleModal}>
                  Close
                </Button>
              </div>
            </div>
          </>
        )}

        <div className="mt-2 w-full">
          <WeekCards />
        </div>
      </div>
    </div>
  );
}

export default MealPlanner;
