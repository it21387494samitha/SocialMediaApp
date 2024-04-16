import React from "react";

const SuggetionCard = () => {
  return (
    <div className="flex justify-between items-center">
      <div className="flex items-center">
        <img
          className="w-9 h-9 rounded-full"
          src="https://images.pexels.com/photos/1043458/pexels-photo-1043458.jpeg?auto=compress&cs=tinysrgb&w=800"
          alt=""
        />
        <div className="ml-2">
          <p className="text-sm font-semibold">username</p>
          <p className="text-sm font-semibold opacity-70m">Follows you</p>
        </div>
      </div>
      <p className="text-blue-700 text-sm font-semibold">Follow</p>
    </div>
  );
};

export default SuggetionCard;
