import React, { useState } from "react";

import {
  BsBookmark,
  BsBookmarkFill,
  BsEmojiSmile,
  BsThreeDots,
} from "react-icons/bs";
import "./PostCard.css";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { FaRegComment } from "react-icons/fa";
import { RiSendPlaneLine } from "react-icons/ri";
import CommentModal from "../Comment/CommentModal";
import { useDisclosure } from "@chakra-ui/react";
const PostCard = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [isPostLiked, setIsPostLiked] = useState(false);
  const [isSaved, setIsSaved] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleSave = () => {
    setIsSaved(!isSaved);
  };

  const handleLike = () => {
    setIsPostLiked(!isPostLiked);
  };
  const handleClick = () => {
    setShowDropdown(!showDropdown);
  };

  const handleComment = () => {
    onOpen();
  };
  return (
    <div>
      <div className="border rounded-md w-full">
        <div className="flex justify-between items-center w-full py-4 px-5">
          <div className="flex items-center">
            <img
              className="h-12 w-12 rounded-full"
              src="https://images.pexels.com/photos/1322129/pexels-photo-1322129.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt=""
            />
            <div className="pl-2">
              <p className="font-semibold text-sm">username</p>
              <p className="font-thin text-sm">location</p>
            </div>
          </div>
          <div className="dropdown">
            <BsThreeDots className="dots" onClick={handleClick} />
            <div className="dropdown-content">
              {showDropdown && (
                <p className="bg-black text-white py-1 px-4 rounded-md cursor-pointer">
                  Delete
                </p>
              )}
            </div>
          </div>
        </div>
        <div className="w-full">
          <img
            src="https://images.pexels.com/photos/532168/pexels-photo-532168.jpeg?auto=compress&cs=tinysrgb&w=800"
            alt=""
          />
        </div>
        <div className="flex justify-between items-center w-full px-5 py-4">
          <div className="flex items-center space-x-2">
            {isPostLiked ? (
              <AiFillHeart
                className="text-2xl hover:opacity-50 cursor-pointer text-red-500"
                onClick={handleLike}
              />
            ) : (
              <AiOutlineHeart
                className="text-2xl hover:opacity-50 cursor-pointer"
                onClick={handleLike}
              />
            )}
            <FaRegComment
              onClick={handleComment}
              className="text-xl hover:opacity-50 cursor-pointer"
            />
            <RiSendPlaneLine className="text-xl hover:opacity-50 cursor-pointer" />
          </div>
          <div className="cursor-pointer">
            {isSaved ? (
              <BsBookmarkFill
                className="text-xl hover:opacity-50 cursor-pointer"
                onClick={handleSave}
              />
            ) : (
              <BsBookmark
                className="text-xl hover:opacity-50 cursor-pointer"
                onClick={handleSave}
              />
            )}
          </div>
        </div>
        <div className="w-full py-2 px-5">
          <p>10 likes</p>
          <p className="opacity-50 py-2 cursor-pointer">view all 10 comments</p>
        </div>
        <div className="border border-t w-full ">
          <div className="flex w-full items-center px-5">
            <BsEmojiSmile />
            <input
              className="commentInput"
              type="text"
              placeholder="Add a comment ..."
            />
          </div>
        </div>
      </div>
      <CommentModal
        handleLike={handleLike}
        handleSave={handleSave}
        onClose={onClose}
        isOpen={isOpen}
        isPostLiked={isPostLiked}
        isSaved={isSaved}
      />
    </div>
  );
};

export default PostCard;
