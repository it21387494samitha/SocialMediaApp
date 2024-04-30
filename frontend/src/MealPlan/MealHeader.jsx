import React from 'react';

const MealHeader = () => {
    return (
        <header className="bg-gray-800 text-white py-4 px-6 flex justify-between items-center">
            <h1 className="text-2xl font-bold">Meal Planner</h1>
            <div className="flex space-x-4">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    New Meal
                </button>
                <button className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded">
                    Save Meal Plan
                </button>
            </div>
        </header>
    );
}

export default MealHeader;
