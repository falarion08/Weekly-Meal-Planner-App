import { useNavigate } from 'react-router-dom';

export default function LeftOvers() {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/');
    };


    return (
      <div className="container mx-auto p-6 bg-white shadow-lg rounded-lg mt-32">
          <h1 className="text-3xl font-bold text-center text-gray-800">Manage LeftOvers</h1>
            <button  
                onClick={handleClick} 
                className="bg-blue-500 text-white font-bold py-2 px-4 rounded shadow-md hover:bg-blue-600 fixed top-4 right-4"
            >
            Home
          </button>
        <div className="meal-list mb-6">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">Meals</h2>
          <ul className="space-y-4">
            <li className="flex justify-between items-center bg-gray-100 p-4 rounded-lg">
              <span>Chicken Sandwich - 11/11/2024</span>
              <button className="leftover-btn bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
                Mark as Leftover
              </button>
            </li>
            <li className="flex justify-between items-center bg-gray-100 p-4 rounded-lg">
              <span>Pasta - 11/12/2024</span>
              <button className="leftover-btn bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
                Mark as Leftover
              </button>
            </li>
          </ul>
        </div>
        <div className="suggested-meals">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">Suggested Meals</h2>
          {/* <li></li> */}
          <p className="text-gray-600">Not available.</p>
        </div>
      </div>
    );
  }
  