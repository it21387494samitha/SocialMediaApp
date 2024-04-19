import React from "react";
import Chart from "chart.js/auto";
import { Line } from "react-chartjs-2";
import { FaRunning } from "react-icons/fa";
import { GiWeightLiftingUp } from "react-icons/gi";
import { GrYoga } from "react-icons/gr";
import { AiFillPlusCircle } from "react-icons/ai";
import WorkoutCreateModal from "../../Components/Workout/WorkoutCreateModal";
import { useDisclosure } from "@chakra-ui/react";
const Workout = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const labels = ["January", "February", "March", "April", "May", "June"];
  const data = {
    labels: labels,
    datasets: [
      {
        label: "My First dataset",
        backgroundColor: "rgb(255, 99, 132)",
        borderColor: "rgb(255, 99, 132)",
        data: [0, 10, 5, 2, 20, 30, 45],
      },
      {
        label: "My Second dataset",
        backgroundColor: "rgb(255, 99, 100)",
        borderColor: "rgb(225, 59, 100)",
        data: [0, 1, 4, 6, 24, 23, 42],
      },
      {
        label: "My Second dataset",
        backgroundColor: "rgb(255, 99, 100)",
        borderColor: "rgb(225, 59, 100)",
        data: [7, 10, 34, 23, 12, 27, 4],
      },
    ],
  };
  const handleClick = () => {
    onOpen();
  };

  return (
    <div>
      <div className="flex">
        <div className="w-[50%]">
          <div>
            <h1 className="text-2xl m-4 font-semibold">Fitness Activity</h1>
          </div>
          <div>
            <Line data={data} className="ml-4" />
          </div>
        </div>

        <div className="">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-2xl m-4 font-semibold">Last Workout</h1>
            </div>
            <div>
              <AiFillPlusCircle
                onClick={handleClick}
                className="text-4xl mr-4"
              />
            </div>
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
      <div>
        <div>
          <h1 className="text-2xl m-4 font-semibold">Workout Summery</h1>

          <hr />

          <div className="border border-gray-400 p-4 rounded-lg">
            <GrYoga className="text-4xl" />
            <h2 className="text-xl font-semibold">Yoga</h2>
            <p className="text-lg">Duration: 1 hour</p>
          </div>
        </div>
      </div>
      <WorkoutCreateModal onClose={onClose} isOpen={isOpen} />
    </div>
  );
};

export default Workout;
