import React from "react";
import { TbCircleDashed } from "react-icons/tb";
export const ProfileUserDetails = () => {
  return (
    <div className="py-10 w-full">
      <div className="flex items-center">
        <div className="w-[15%]">
          <img
            className="w-32 h-32 rounded-full"
            src="https://images.pexels.com/photos/1308881/pexels-photo-1308881.jpeg?auto=compress&cs=tinysrgb&w=800"
            alt=""
          />
        </div>
        <div className="space-y-5">
          <div className="flex space-x-10 items-center">
            <p>username</p>
            <button>Edit Profile</button>
            <TbCircleDashed></TbCircleDashed>
          </div>
          <div className="flex space-x-10">
            <div>
              <span className="font-semibold mr-2">10</span>
              <span>Posts</span>
            </div>
            <div>
              <span className="font-semibold mr-2">10</span>
              <span>Followers</span>
            </div>
            <div>
              <span className="font-semibold mr-2">10</span>
              <span>Following</span>
            </div>
          </div>
          <div>
            <p className="font-semibold">Full Name</p>
            <p className="font-thin text-sm">username</p>
          </div>
        </div>
      </div>
    </div>
  );
};
