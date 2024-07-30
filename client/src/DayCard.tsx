import React from 'react';

interface DayCardProps {
  day: string;
}

const DayCard: React.FC<DayCardProps> = ({ day }) => (
  <div className="max-w-sm rounded overflow-hidden shadow-lg bg-yellow-200 p-4">
    <div className="font-bold text-xl mb-2">{day}</div>
    <div className="text-gray-700 text-base">
      <div className="mb-2">
        <div className="font-semibold">Breakfast</div>
        <div className="border p-2 rounded">Details for breakfast</div>
      </div>
      <div className="mb-2">
        <div className="font-semibold">Lunch</div>
        <div className="border p-2 rounded">Details for lunch</div>
      </div>
      <div className="mb-2">
        <div className="font-semibold">Dinner</div>
        <div className="border p-2 rounded">Details for dinner</div>
      </div>
    </div>
  </div>
);

export default DayCard;
