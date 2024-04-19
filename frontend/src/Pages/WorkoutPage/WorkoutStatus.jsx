import { Button, Input } from "@chakra-ui/react";
import React, { useState } from "react";
import { FaRunning } from "react-icons/fa";
import { GiWeightLiftingUp } from "react-icons/gi";
import { GrYoga } from "react-icons/gr";

const WorkoutStatus = () => {
  const [height, setHeight] = useState(1.2);
  const [weight, setWeight] = useState(60);
  const [bmi, setBmi] = useState(20);
  const [calories, setCalories] = useState(2000);

  const handleClick = () => {
    console.log("clicked");
  };
  return (
    <div>
      <div className="flex">
        <div>
          <h1 className="text-2xl m-4 font-semibold">Profile</h1>
          <hr />
          <div>
            <div className="m-4">
              <div className="">
                <label htmlFor="">height</label>
                <Input value={height} />
              </div>
              <div className="">
                <label htmlFor="">weight</label>
                <Input value={weight} />
              </div>
              <div className="">
                <label htmlFor="">bmi</label>
                <Input value={bmi} />
              </div>
              <div className="">
                <label htmlFor="">calories</label>
                <Input value={calories} />
              </div>
              <Button onClick={handleClick} className="text-4xl mr-4">
                Update
              </Button>
              <div></div>
            </div>
          </div>
        </div>
        <div>
          <div className="flex justify-between items-center">
            <h1 className="text-2xl m-4 font-semibold">Workout Status</h1>
            <hr />
          </div>

          <div className="flex flex-wrap justify-center">
            <div className="m-4">
              <div className="border border-gray-400 p-4 rounded-lg">
                <FaRunning className="text-4xl" />
                <h2 className="text-xl font-semibold">Running</h2>
                <p className="text-lg">Distance: 5km</p>
                <p className="text-lg">Duration: 30 min</p>
              </div>
            </div>
            <div className="m-4">
              <div className="border border-gray-400 p-4 rounded-lg">
                <GiWeightLiftingUp className="text-4xl" />
                <h2 className="text-xl font-semibold">Weight Lifting</h2>
                <p className="text-lg">Reps: 10</p>
                <p className="text-lg">Sets: 3</p>
              </div>
            </div>
            <div className="m-4">
              <div className="border border-gray-400 p-4 rounded-lg">
                <GrYoga className="text-4xl" />
                <h2 className="text-xl font-semibold">Yoga</h2>
                <p className="text-lg">Duration: 1 h</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkoutStatus;
