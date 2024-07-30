import { useNavigate } from 'react-router-dom';


function HomePage() {

const navigate = useNavigate();


  const handleLoginClick = () => {
    navigate('/login');
  };

  const handleRegisterClick = () => {
    navigate('/register')
  };

  const handleButton1Click = () => {
    navigate('/nutrition')
  };

  const handleButton2Click = () => {
    navigate('/recepies')
  };

  const handleButton3Click = () => {
    navigate('/assistance')
  };

  const handleButton4Click = () => {
    navigate('/support')
  };

  const handlePlannerClick = () => {
    navigate('/planner')
  };

  return (
    <div className="relative min-h-screen bg-gray-100"> 
      <div className="absolute top-0 right-0 p-4"> 
        <button onClick={handleLoginClick} className="bg-blue-500 text-white font-bold py-2 px-4 rounded mr-2">Login</button>
        <button onClick={handleRegisterClick} className="bg-green-500 text-white font-bold py-2 px-4 rounded">Register</button>
      </div>
      <div className="flex flex-col items-center justify-center min-h-screen">
        <h1 className="text-blue-500 text-6xl mb-8 font-bold">Health and Nutrition Support Portal</h1>
        <p className="text-orange-500 text-center mb-8 font-bold">
          Our goal is to help our users connect to local health services
          <br />
          and offer resources for maintaining good health despite financial constraints.
        </p>


        <hr className="w-full border-t border-gray-700 mb-8" />

        <div className="flex space-x-4"> 
          <button onClick ={handlePlannerClick} className="bg-cyan-500 text-white font-bold py-2 px-4 rounded">Meal Planner</button>
          <button onClick={handleButton1Click} className="bg-cyan-500 text-white font-bold py-2 px-4 rounded">Basic Nutrition</button>
          <button onClick={handleButton2Click} className="bg-cyan-500 text-white font-bold py-2 px-4 rounded">Budget Recepies</button>
          <button onClick={handleButton3Click} className="bg-cyan-500 text-white font-bold py-2 px-4 rounded">Local Assitance and Resources</button>
          <button onClick={handleButton4Click} className="bg-cyan-500 text-white font-bold py-2 px-4 rounded">Support and Contact</button>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
