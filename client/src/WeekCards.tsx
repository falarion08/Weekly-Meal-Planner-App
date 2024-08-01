import React, { useEffect, useState } from 'react';
import DayCard from './DayCard';

const WeekCards: React.FC = () => {
  const daysOfWeek: string[] = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const [currentWeek, setCurrentWeek] = useState<string[]>([]);

  const mealPlans = [
    {
      type: 'Breakfast',
      plans: [
        {
          name: 'Pancakes',
          ingredients: [
            { name: 'Flour', cost: '$1' },
            { name: 'Eggs', cost: '$2' },
            { name: 'Milk', cost: '$1.5' },
          ],
        },
        {
          name: 'Omelette',
          ingredients: [
            { name: 'Eggs', cost: '$2' },
            { name: 'Cheese', cost: '$1' },
            { name: 'Bell Peppers', cost: '$0.5' },
          ],
        },
      ],
    },
    {
      type: 'Lunch',
      plans: [
        {
          name: 'Sandwich',
          ingredients: [
            { name: 'Bread', cost: '$1' },
            { name: 'Turkey', cost: '$3' },
            { name: 'Lettuce', cost: '$0.5' },
          ],
        },
        {
          name: 'Salad',
          ingredients: [
            { name: 'Lettuce', cost: '$0.5' },
            { name: 'Tomatoes', cost: '$1' },
            { name: 'Cucumbers', cost: '$0.7' },
          ],
        },
      ],
    },
    {
      type: 'Dinner',
      plans: [
        {
          name: 'Pasta',
          ingredients: [
            { name: 'Pasta', cost: '$2' },
            { name: 'Tomato Sauce', cost: '$1.5' },
            { name: 'Parmesan', cost: '$1' },
          ],
        },
        {
          name: 'Grilled Chicken',
          ingredients: [
            { name: 'Chicken Breast', cost: '$5' },
            { name: 'Olive Oil', cost: '$0.5' },
            { name: 'Garlic', cost: '$0.2' },
          ],
        },
      ],
    },
  ];

  useEffect(() => {
    const today = new Date().getDay();
    const week: string[] = [];
    for (let i = 0; i < 7; i++) {
      week.push(daysOfWeek[(today + i) % 7]);
    }
    setCurrentWeek(week);

    const intervalId = setInterval(() => {
      const now = new Date();
      if (now.getDay() === 0 && now.getHours() === 0 && now.getMinutes() === 0) {
        setCurrentWeek([]);
      }
    }, 60000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="flex flex-wrap justify-center items-start mt-4 space-x-4 space-y-6">
      {currentWeek.map((currentDay, index) => (
        <DayCard key={index} day={currentDay} mealPlans={mealPlans} />
      ))}
    </div>
  );
};

export default WeekCards;
