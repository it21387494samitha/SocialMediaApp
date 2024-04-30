import { Collapse, IconButton } from "@chakra-ui/react";
import React, { useState } from "react";
import { FiMoreHorizontal } from "react-icons/fi";
import { MdExpandMore } from "react-icons/md";
import { MdFavorite } from "react-icons/md";
import { FaShareAlt, FaEllipsisH } from "react-icons/fa";
import MealHeader from "./MealHeader";
import MoreOptionsButton from "./MoreOptionsButton";
import { Link } from "react-router-dom";

const CreateMealPlan = () => {
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <>
      <div className="bg-gray-100 min-h-screen  items-center justify-center">
        <header className="bg-gray-800 text-white py-4 px-6 flex justify-between items-center">
          <h1 className="text-2xl font-bold">Meal Planner</h1>
          <div className="flex space-x-4">
            <div className="flex space-x-4">
              <Link to="/ncm">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out transform hover:scale-110">
                  Create Meal Plan
                </button>
              </Link>
            </div>
            <select className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded">
              <option value="create">Vegan</option>
              <option value="new">Others</option>
            </select>
          </div>
        </header>

        <div className="flex m-32">
          <div className="flex flex-col items-center space-y-6 p-6">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden max-w-sm">
              <div className="relative">
                <img
                  className="w-full h-48 object-cover"
                  src="https://images.pexels.com/photos/769289/pexels-photo-769289.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt="Paella dish"
                />
                <div className="absolute top-2 right-2">
                  <MoreOptionsButton />
                </div>
              </div>
              <div className="p-4">
                <h2 className="text-xl font-semibold mb-2">
                  Shrimp and Chorizo Paella
                </h2>
                <p className="text-gray-600 mb-4">September 14, 2016</p>
                <p className="text-gray-700 mb-4">
                  This impressive paella is a perfect party dish and a fun meal
                  to cook together with your guests. Add 1 cup of frozen peas
                  along with the mussels, if you like.
                </p>
                <div className="flex justify-between items-center">
                  <div>
                    <IconButton
                      aria-label="add to favorites"
                      className="text-red-500"
                    >
                      <MdFavorite />
                    </IconButton>
                    <IconButton aria-label="share" className="text-gray-100">
                      <FaShareAlt />
                    </IconButton>
                  </div>
                  <div>
                    <MdExpandMore
                      className="text-gray-500 cursor-pointer"
                      onClick={handleExpandClick}
                    />
                  </div>
                </div>
                <Collapse in={expanded} timeout="auto" unmountOnExit>
                  <div>
                    {/* Your custom content goes here */}
                    <p>This is your custom content.</p>
                    <p>
                      Feel free to add any React icons or other components here.
                    </p>
                  </div>
                </Collapse>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CreateMealPlan;
