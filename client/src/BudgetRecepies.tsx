import { useNavigate } from 'react-router-dom';

function BudgetRecepies() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/');
  };

  return (
    <div className="relative min-h-screen bg-gray-100 flex flex-col items-center justify-center space-y-8">
      <div className="absolute top-4 right-4">
        <button 
          onClick={handleClick} 
          className="bg-blue-500 text-white font-bold py-2 px-4 rounded shadow-md"
        >
          Home
        </button>
      </div>
      
      <h1 className="text-4xl font-bold text-center text-orange-500">Low-Cost Recipes</h1>
      <div className="bg-white p-6 rounded shadow-lg w-full max-w-4xl text-center">
        <p className="text-gray-700 text-lg">
          Low-cost recipes can help you prepare delicious and nutritious meals without spending too much money. These recipes use affordable ingredients and simple cooking methods to create meals that are both healthy and budget-friendly.
        </p>
      </div>

      <h1 className="text-4xl font-bold text-center text-orange-500">Cooking Tips</h1>
      <div className="bg-white p-6 rounded shadow-lg w-full max-w-4xl text-center">
        <p className="text-gray-700 text-lg">
          Cooking tips can help you become more efficient and effective in the kitchen. Learn how to save time, reduce waste, and make the most of your ingredients with these helpful tips and tricks.
        </p>
      </div>

      <h1 className="text-4xl font-bold text-center text-orange-500">Meal Planning</h1>
      <div className="bg-white p-6 rounded shadow-lg w-full max-w-4xl text-center">
        <p className="text-gray-700 text-lg">
          Meal planning is a great way to ensure you have healthy and delicious meals ready to go throughout the week. Plan your meals ahead of time to save money, reduce stress, and make the most of your grocery shopping.
        </p>
      </div>
    </div>
  );
}

export default BudgetRecepies;
