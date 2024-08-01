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

  return (
    <div className="m-0 p-0 relative min-h-screen pt-5 pb-5 mx-auto px-4 text-center text-gray-800 font-sans " style={{ backgroundImage: "url('src/images/img_1.png')", backgroundSize: 'cover', backgroundPosition: 'center' }}> 
    <div className='container mx-auto px-4 bg-gray-100 min-h-screen p-5'>
      <div className="absolute top-5 right-14 mt-6 mr-16"> 
          <button onClick={handleLoginClick} className="bg-blue-500 text-white font-bold py-2 px-4 rounded mr-2 hover:bg-blue-600">Login</button>
          <button onClick={handleRegisterClick} className="bg-green-500 text-white font-bold py-2 px-4 rounded hover:bg-green-600">Register</button>
        </div>
        <div className="flex flex-col items-center justify-center min-h-screen">
          <h1 className="text-huge text-green-500 font-bold mb-8 mt-10 animate-flyInFromRight">Meal Planner App</h1>
          <p className="text-gray-300 text-center mb-8 font-bold">
            Our goal is to help our users track their meal plans
            <br />
            and track their costs according to their budget
          </p>


          <hr className="w-full border-t border-gray-700 mb-8" />
          <h2 className='text-4xl text-green-700 font-bold leading-loose'>What we offer</h2>
          <div className="flex flex-wrap justify-center gap-4 pt-4">
          <button onClick ={handlePlannerClick} className="bg-cyan-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-600">Meal Planner</button>
            <button onClick={handleButton1Click} className="bg-cyan-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-600">Basic Nutrition</button>
            <button onClick={handleButton2Click} className="bg-cyan-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-600">Budget Recepies</button>
            <button onClick={handleButton3Click} className="bg-cyan-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-600">Local Assitance and Resources</button>
            <button onClick={handleButton4Click} className="bg-cyan-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-600">Support and Contact</button>
            <button onClick={handleShoppingList} className="bg-cyan-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-600">Shopping List</button>
            <button onClick={handleNotesTips} className="bg-cyan-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-600">Notes & Tips</button>
    

          </div>
        </div>
      </div>
    </div>
        
    );
  }

export default HomePage;
