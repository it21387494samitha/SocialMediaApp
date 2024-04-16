import React, { useState } from "react";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";

const CommentCard = () => {
  const [isCommentLiked, setIsCommentLiked] = useState(false);

  const handleLike = () => {
    setIsCommentLiked(!isCommentLiked);
  };
  return (
    <div>
      <div className="flex items-center justify-between py-5">
        <div className="flex items-center">
          <div>
            <img
              className="w-9 h-9 rounded-full"
              src="https://images.pexels.com/photos/1139613/pexels-photo-1139613.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt=""
            />
          </div>
          <div className="ml-3">
            <p>
              <span className="font-semibold">username</span>
              <span className="ml-2">nice post</span>
            </p>
            <div className="flex items-center space-x-3 opacity-60 pt-2">
              <span>1 min ago</span>
              <span>23 likes</span>
            </div>
          </div>
        </div>
        {isCommentLiked ? (
          <AiFillHeart
            className="text-xs hover:opacity-50 cursor-pointer text-red-500"
            onClick={handleLike}
          />
        ) : (
          <AiOutlineHeart
            className="text-xs hover:opacity-50 cursor-pointer"
            onClick={handleLike}
          />
        )}
      </div>
    </div>
  );
};

export default CommentCard;
