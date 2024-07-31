import React, { useState } from 'react';

interface Ingredient {
    name: string;
    cost: string;
}

const CreateMealPlan: React.FC = () => {
    const [ingredients, setIngredients] = useState<Ingredient[]>([{ name: '', cost: '' }]);

    const addIngredient = () => {
        setIngredients([...ingredients, { name: '', cost: '' }]);
    };

    const handleIngredientChange = (index: number, event: React.ChangeEvent<HTMLInputElement>) => {
        const newIngredients = ingredients.map((ingredient, i) => {
            if (i === index) {
                return { ...ingredient, [event.target.name]: event.target.value };
            }
            return ingredient;
        });
        setIngredients(newIngredients);
    };

    return (
        <>
            <div className="modal">
                <div className="modal-content p-6 bg-white rounded-lg shadow-md">
                    <h2 className="text-2xl font-bold mb-4">Create Meal Plan</h2>
                    <div className="mb-4">
                        <label className="block text-gray-700 mb-2">
                            Day of the Week:
                            <select name="day" className="w-full mt-1 p-2 border rounded-md">
                                <option value="monday">Monday</option>
                                <option value="tuesday">Tuesday</option>
                                <option value="wednesday">Wednesday</option>
                                <option value="thursday">Thursday</option>
                                <option value="friday">Friday</option>
                                <option value="saturday">Saturday</option>
                                <option value="sunday">Sunday</option>
                            </select>
                        </label>
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 mb-2">
                            Time of Day:
                            <select name="time" className="w-full mt-1 p-2 border rounded-md">
                                <option value="breakfast">Breakfast</option>
                                <option value="lunch">Lunch</option>
                                <option value="dinner">Dinner</option>
                            </select>
                        </label>
                    </div>
                    {ingredients.map((ingredient, index) => (
                        <div key={index} className="mb-4 p-4 border rounded-lg">
                            <div className="mb-2">
                                <label className="block text-gray-700 mb-1">
                                    Ingredient:
                                    <input
                                        type="text"
                                        name="name"
                                        value={ingredient.name}
                                        onChange={(event) => handleIngredientChange(index, event)}
                                        className="w-full mt-1 p-2 border rounded-md"
                                    />
                                </label>
                            </div>
                            <div>
                                <label className="block text-gray-700 mb-1">
                                    Cost:
                                    <input
                                        type="text"
                                        name="cost"
                                        value={ingredient.cost}
                                        onChange={(event) => handleIngredientChange(index, event)}
                                        className="w-full mt-1 p-2 border rounded-md"
                                    />
                                </label>
                            </div>
                        </div>
                    ))}
                    <button
                        type="button"
                        onClick={addIngredient}
                        className="w-full mt-4 p-2 bg-yellow-200 text-black rounded-md hover:bg-blue-600"
                    >
                        Add Ingredient
                    </button>
                    <hr className="my-4" />
                    <button
                        type="button"
                        className="w-full p-2 bg-yellow-200 text-black rounded-md hover:bg-green-600"
                    >
                        Add Meal Plan
                    </button>
                </div>
            </div>
        </>
    );
};

export default CreateMealPlan;
