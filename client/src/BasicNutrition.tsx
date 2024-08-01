import { useNavigate } from 'react-router-dom';

function BasicNutrition() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/');
  };

  return (
    <div className="relative min-h-screen bg-green-100 flex flex-col items-center justify-center space-y-8 ">
      <div className="absolute top-4 right-4 animate-flyInFromRight">
        <button 
          onClick={handleClick} 
          className="bg-blue-500 text-white font-bold py-2 px-4 rounded shadow-md hover:scale-105 hover:z-10 transition-transform duration-300 ease-in-out"
        >
          Home
        </button>
      </div>
      <div className='animate-flyInFromRight'>

      </div>
      <h1 className="text-4xl font-bold text-center text-[#006400] animate-flyInFromRight">Essential Nutrients</h1>
      <div className=" animate-slide-in-from-left animate-flyInFromLeft bg-white p-6 rounded shadow-lg w-full max-w-4xl text-center hover:scale-105 hover:z-10 transition-transform duration-300 ease-in-out ">
        <p className="text-gray-700 text-lg">
          Essential nutrients are compounds that the body cannot make or cannot make in sufficient quantity. These nutrients must come from food, and they are vital for disease prevention, growth, and good health.
        </p>
      </div>

      <h1 className="text-4xl font-bold text-center text-[#006400] animate-flyInFromRight">Affordable Foods</h1>
      <div className=" animate-slide-in-from-left animate-flyInFromLeft bg-white p-6 rounded shadow-lg w-full max-w-4xl text-center hover:scale-105 hover:z-10 transition-transform duration-300 ease-in-out ">
        <p className="text-gray-700 text-lg ">
          Affordable foods can provide the necessary nutrients without breaking the bank. Look for whole grains, seasonal fruits and vegetables, and lean proteins that are both cost-effective and nutritious.
        </p>
      </div>

      <h1 className="text-4xl font-bold text-center text-[#006400]  animate-flyInFromRight">Healthy Eating Tips</h1>
      <div className= " animate-slide-in-from-left animate-flyInFromLeft bg-white p-6 rounded shadow-lg w-full max-w-4xl text-center hover:scale-105 hover:z-10 transition-transform duration-300 ease-in-out ">
        <p className="text-gray-700 text-lg ">
          Healthy eating tips include balancing your meals, choosing a variety of foods, and moderating portion sizes. Staying hydrated, reducing sugar intake, and incorporating physical activity are also key components of a healthy lifestyle.
        </p>
      </div>
    </div>
  );
}

export default BasicNutrition;
