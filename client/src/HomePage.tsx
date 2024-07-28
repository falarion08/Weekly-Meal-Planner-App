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
    // Handle button 1 click
  };

  const handleButton2Click = () => {
    // Handle button 2 click
  };

  const handleButton3Click = () => {
    // Handle button 3 click
  };

  const handleButton4Click = () => {
    // Handle button 4 click
  };

  return (
    <div className="relative min-h-screen bg-gray-100"> 
      <div className="absolute top-0 right-0 p-4"> 
        <button onClick={handleLoginClick} className="bg-blue-500 text-white font-bold py-2 px-4 rounded mr-2">Login</button>
        <button onClick={handleRegisterClick} className="bg-green-500 text-white font-bold py-2 px-4 rounded">Register</button>
      </div>
      <div className="flex flex-col items-center justify-center min-h-screen">
        <h1 className="text-blue-500 text-6xl mb-8">Health and Nutrition Support Portal</h1>
        <p> Portals Purpose</p>

        <hr className="w-full border-t border-gray-700 mb-8" />

        <div className="flex space-x-4"> 
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
