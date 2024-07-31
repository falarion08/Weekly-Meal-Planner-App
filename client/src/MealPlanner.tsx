import React, { useState } from 'react';
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
    <div className="min-h-screen p-4 flex flex-col items-center">
      <h1 className="text-3xl font-bold mb-4">Weekly Meal Planner</h1>
      <div className="space-y-4 w-full flex flex-col items-center">

        <CostOfWeek budget={budget} totalCost={totalCost} />


        <div className="flex justify-center w-full">
          <Button className="bg-yellow-200 text-black" onClick={toggleModal}>
            Create Meal Plan
          </Button>
        </div>


        {isModalOpen && (
          <div className="w-full flex flex-col items-center">
            <CreateMealPlan />
            <Button className="bg-yellow-200 text-black mt-4" onClick={toggleModal}>
              Close
            </Button>
          </div>
        )}


        <WeekCards />
      </div>
    </div>
  );
}

export default MealPlanner;
