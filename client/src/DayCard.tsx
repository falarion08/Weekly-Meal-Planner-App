import React, { useState, useEffect } from 'react';
import AlertModal from './AlertModal';

interface Ingredient {
  name: string;
  cost: string;
}

interface MealPlan {
  type: string;
  plans: {
    name: string;
    ingredients: Ingredient[];
  }[];
}

interface DayCardProps {
  day: string;
  mealPlans: MealPlan[];
}

const DayCard: React.FC<DayCardProps> = ({ day, mealPlans }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const fetchTotalCost = () => {
    const totalCost = 10; // Dummy value for now
    return totalCost;
  };

  useEffect(() => {
    const totalDayCost = fetchTotalCost();
    const budget = 30; // Dummy budget value

    if (totalDayCost > budget && !isModalOpen) {
      setIsModalOpen(true);
    }
  }, [isModalOpen]);

  const totalDayCost = fetchTotalCost();

  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-yellow-200 p-4 mb-4">
      <AlertModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        message="Total cost exceeds the budget!"
      />
      <div className="font-bold text-xl mb-2">{day} | Cost: {totalDayCost}</div>
      <div className="text-gray-700 text-base">
        {mealPlans.map((mealPlan, index) => (
          <div key={index} className="meal-plan-box mb-4">
            <div className="font-semibold">{mealPlan.type}</div>
            {mealPlan.plans.map((plan, i) => (
              <div key={i} className="border p-2 rounded mt-1 relative">
                <div className="flex justify-between items-center">
                  <div className="font-bold">{plan.name}</div>
                  <div>
                    <button className="bg-black text-white px-1 py-1 rounded mr-1 text-sm">x</button>
                    <button className="bg-black text-white px-1 py-1 rounded text-sm">u</button>
                  </div>
                </div>
                <ul className="list-disc list-inside mt-2">
                  {plan.ingredients.map((ingredient, j) => (
                    <li key={j}>
                      {ingredient.name}: {ingredient.cost}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default DayCard;
