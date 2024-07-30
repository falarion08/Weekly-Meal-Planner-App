import React from 'react';

interface CostOfWeek {
  budget: string;
  totalCost: string;
}

const CostOfWeek: React.FC<CostOfWeek> = ({ budget, totalCost }) => {
  return (
    <div className="max-w-md mx-auto bg-yellow-100 p-6 rounded-lg shadow-lg mt-10">
      <h2 className="text-xl font-bold mb-4 text-center">Weekly Budget and Total Cost</h2>
      <div className="flex space-x-4">
        <div className="flex-1">
          <label className="block text-gray-700 font-semibold mb-2">Weekly Budget</label>
          <input
            type="text"
            value={budget}
            readOnly
            className="border border-gray-300 rounded p-2 w-full"
            placeholder="Enter your weekly budget"
          />
        </div>
        <div className="flex-1">
          <label className="block text-gray-700 font-semibold mb-2">Total Cost</label>
          <input
            type="text"
            value={totalCost}
            readOnly
            className="border border-gray-300 rounded p-2 w-full"
            placeholder="Total cost"
          />
        </div>
      </div>
    </div>
  );
};

export default CostOfWeek;
