import { useNavigate } from 'react-router-dom';

function LocalAssistance() {
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
      
      <h1 className="text-4xl font-bold text-orange-500">Food Assistance Programs</h1>
      <div className="bg-white p-6 rounded shadow-lg w-full max-w-4xl text-center">
        <p className="text-gray-700 text-lg">
          Various food assistance programs are available to help those in need. These programs provide essential support
          to ensure that everyone has access to nutritious meals.
        </p>
      </div>

      <h1 className="text-4xl font-bold text-orange-500">Health Clinics</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {Array.from({ length: 6 }, (_, index) => (
          <div key={index} className="bg-cyan-500 text-white font-bold py-4 px-6 rounded shadow-md text-center">
            Location {index + 1}
          </div>
        ))}
      </div>

      <h1 className="text-4xl font-bold text-orange-500">Government Aid</h1>
      <div className="bg-white p-6 rounded shadow-lg w-full max-w-4xl text-center">
        <p className="text-gray-700 text-lg">
          Government aid programs provide financial and other types of support to individuals and families in need.
          These programs aim to alleviate poverty and provide a safety net for the most vulnerable members of society.
        </p>
      </div>
    </div>
  );
}

export default LocalAssistance;
