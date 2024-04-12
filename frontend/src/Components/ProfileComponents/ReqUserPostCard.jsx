import React from "react";
import { AiFillHeart } from "react-icons/ai";
import { FaComment } from "react-icons/fa";
import "./ReqUserPostCard.css";
const ReqUserPostCard = () => {
  return (
    <div className="p-2">
      <div className="post h-60 w-60">
        <img
          src="https://images.pexels.com/photos/206359/pexels-photo-206359.jpeg?auto=compress&cs=tinysrgb&w=800"
          alt=""
        />
        <div className="overlay">
          <div className="overlay-text flex justify-between">
            <div>
              <AiFillHeart></AiFillHeart> <span>10</span>
            </div>
            <div>
              <FaComment />
              <span>30</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReqUserPostCard;
