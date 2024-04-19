import React, { useState } from "react";
import { AiOutlineTable } from "react-icons/ai";
import { BiBookmark } from "react-icons/bi";
import { RiVideoAddLine } from "react-icons/ri";
import Workout from "./Workout";
import WorkoutStatus from "./WorkoutStatus";
import WorkoutGoals from "./WorkoutGoals";

const WorkoutRoute = () => {
  const [activeTab, setActiveTab] = useState();
  const tabs = [
    {
      tab: "Workout",
      icon: <AiOutlineTable></AiOutlineTable>,
      activeTab: "",
    },
    {
      tab: "Workout Status",
      icon: <RiVideoAddLine></RiVideoAddLine>,
    },
    {
      tab: "Goals",
      icon: <BiBookmark></BiBookmark>,
    },
  ];
  return (
    <div>
      <div>
        <div className="flex justify-between items-center">
          <h1 className="text-2xl m-4 font-semibold">Workout</h1>
          <hr />
        </div>
      </div>
      <div className="flex space-x-14 border-t relative ml-4">
        {tabs.map((item) => (
          <div
            onClick={() => setActiveTab(item.tab)}
            className={`${
              activeTab === item.tab ? "border-t border-black" : "opacity-60"
            } flex items-center cursor-pointer py-2 text-sm`}
          >
            <p>{item.icon}</p>
            <p className="ml-1">{item.tab}</p>
          </div>
        ))}
      </div>
      <div>
        <div>
          {activeTab === "Workout" && <Workout />}
          {activeTab === "Workout Status" && <WorkoutStatus />}
          {activeTab === "Goals" && <WorkoutGoals />}
        </div>
      </div>
    </div>
  );
};

export default WorkoutRoute;
