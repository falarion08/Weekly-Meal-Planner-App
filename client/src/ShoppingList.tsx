import { useNavigate } from 'react-router-dom';

export default function ShoppingList() {

    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/');
    };

    return (
        <div className="min-h-screen w-full bg-gray-100 flex flex-col items-center justify-center">
            <div className="relative max-w-6xl w-full p-6 bg-white shadow-md rounded-md">
                <h1 className="text-blue-500 text-4xl mb-6 font-bold text-center">Shopping List Generator</h1>
                
                <div className="flex justify-center mb-4 space-x-2">
                    <button 
                        onClick={handleClick} 
                        className="bg-blue-500 text-white font-bold py-2 px-4 rounded shadow-md hover:bg-blue-600"
                    >
                    Home
                    </button>
                    
                    <button 
                        className="bg-green-500 text-white font-bold py-2 px-4 rounded shadow-md hover:bg-green-600"
                    >
                    Generate List
                    </button>

                    <button
                        className="bg-red-500 text-white font-bold py-2 px-4 rounded shadow-md hover:bg-red-600"
                    >
                    Clear List
                    </button>
                </div>
                
                <ul className="list-none p-0 mt-4 border border-gray-300 rounded-md max-h-96 overflow-y-auto">
                    <li className="p-2 border-b border-gray-200 flex font-bold text-lg">
                        <span className="flex-1 text-left">Item</span>
                        <span className="flex-1 text-center">Quantity</span>
                        <span className="flex-1 text-right">Price</span>
                    </li>
                    <li className="p-2 border-b border-gray-200 flex justify-between">
                        <span className="flex-1 text-left">Onion</span>
                        <span className="flex-1 text-center">x2</span>
                        <span className="flex-1 text-right">$1.50</span>
                    </li>
                    <li className="p-2 border-b border-gray-200 flex justify-between">
                        <span className="flex-1 text-left">Pepper</span>
                        <span className="flex-1 text-center">x1</span>
                        <span className="flex-1 text-right">$2.00</span>
                    </li>
                    <li className="p-2 border-b border-gray-200 flex justify-between">
                        <span className="flex-1 text-left">Water</span>
                        <span className="flex-1 text-center">x1</span>
                        <span className="flex-1 text-right">$0.99</span>
                    </li>
                    <li className="p-2 border-b border-gray-200 flex justify-between">
                        <span className="flex-1 text-left">Pasta</span>
                        <span className="flex-1 text-center">x1</span>
                        <span className="flex-1 text-right">$3.00</span>
                    </li>
                    <li className="p-2 border-b border-gray-200 flex justify-between">
                        <span className="flex-1 text-left">Sauce</span>
                        <span className="flex-1 text-center">x1</span>
                        <span className="flex-1 text-right">$2.50</span>
                    </li>
                </ul>
                
            </div>
        </div>
    );
}
