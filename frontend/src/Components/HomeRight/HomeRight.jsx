import React from "react";
import SuggetionCard from "./SuggetionCard";

const HomeRight = () => {
  return (
    <div className="">
      <div>
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <div>
              <img
                className="w-12 h-12 rounded-full"
                src="https://images.pexels.com/photos/62640/pexels-photo-62640.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt=""
              />
            </div>
            <div className="ml-3">
              <p>FullName</p>
              <p className="opacity-70">username</p>
            </div>
          </div>
          <div>
            <p className="text-blue-700 font-semibold">switch</p>
          </div>
        </div>
        <div className="space-y-5 mt-10">
          {[1, 2, 3, 4].map((item) => (
            <SuggetionCard />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomeRight;
