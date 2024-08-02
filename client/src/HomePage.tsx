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

  const handleShoppingList = () => {
    navigate('/shoppingList')
  };

  const handleNotesTips = () => {
    navigate('/notesTips')
  };

  const handleLeftOvers = () => {
    navigate('/leftOvers')
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-cover bg-center"
    style={{ backgroundImage: "url('/src/images/img_1.png')" }}
    > 
    <div className='bg-white bg-opacity-85 p-8 rounded-lg shadow-lg w-full max-w-6xl'>
      <div className="flex justify-end space-x-4 mb-8"> 
          <button onClick={handleLoginClick} className="bg-blue-500 text-white font-bold py-2 px-4 rounded mr-2 hover:bg-blue-600">Login</button>
          <button onClick={handleRegisterClick} className="bg-green-500 text-white font-bold py-2 px-4 rounded hover:bg-green-600">Register</button>
        </div>
        <div className="text-center mb-8">
          <h1 className="text-7xl text-green-600 font-bold mb-4 animate-flyInFromRight">Meal Planner App</h1>
          <p className="text-gray-700">
            Our goal is to help our users track their meal plans
            <br />
            and track their costs according to their budget
          </p>


          <hr className="w-full border-t border-gray-700 mb-8" />
          <h2 className='text-4xl text-green-700 font-bold leading-loose'>What we offer</h2>
          <div className="flex flex-wrap justify-center gap-4 pt-4">
            <button onClick ={handlePlannerClick} className="bg-cyan-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-500">Meal Planner</button>
            <button onClick={handleButton1Click} className="bg-cyan-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-500">Basic Nutrition</button>
            <button onClick={handleButton2Click} className="bg-cyan-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-500">Budget Recepies</button>
            <button onClick={handleButton3Click} className="bg-cyan-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-500">Local Assitance and Resources</button>
            <button onClick={handleButton4Click} className="bg-cyan-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-500">Support and Contact</button>
            <button onClick={handleShoppingList} className="bg-cyan-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-500">Shopping List</button>
            <button onClick={handleNotesTips} className="bg-cyan-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-500">Notes & Tips</button>
            <button onClick={handleLeftOvers} className="bg-cyan-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-500">Manage LeftOvers</button>
    

          </div>
        </div>
      </div>
    </div>
        
    );
  }

export default HomePage;
