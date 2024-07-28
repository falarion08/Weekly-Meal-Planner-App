import { useNavigate } from 'react-router-dom';

function SupportContact() {
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
      
      <h1 className="text-4xl font-bold text-center text-orange-500">Stories</h1>
      <div className="bg-white p-6 rounded shadow-lg w-full max-w-4xl text-center">
        <p className="text-gray-700 text-lg">
          Stories from our community showcase the impact of our programs and the resilience of the individuals we support. Read these inspiring stories to learn how people have overcome challenges and achieved their goals with our help.
        </p>
      </div>

      <h1 className="text-4xl font-bold text-center text-orange-500">How to Get Involved</h1>
      <div className="bg-white p-6 rounded shadow-lg w-full max-w-4xl text-center">
        <p className="text-gray-700 text-lg">
          There are many ways to get involved and support our mission. Whether you volunteer your time, donate resources, or participate in our events, your involvement makes a difference. Learn how you can contribute and become part of our community.
        </p>
      </div>
    </div>
  );
}

export default SupportContact;
