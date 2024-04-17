import React from "react";

const SearchUserCard = () => {
  return (
    <div className="py-2 cursor-pointer">
      <div className="flex items-center">
        <img
          className="w-10 h-10 rounded-full"
          src="https://images.pexels.com/photos/157757/wedding-dresses-fashion-character-bride-157757.jpeg?auto=compress&cs=tinysrgb&w=800"
          alt=""
        />
        <div className="ml-3">
          <p>Full Name</p>
          <p className="opacity-70">username</p>
        </div>
      </div>
    </div>
  );
};

export default SearchUserCard;
