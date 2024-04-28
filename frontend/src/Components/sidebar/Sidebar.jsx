import React, { useState } from "react";
import { IoReorderThreeOutline } from "react-icons/io5";
import { menuItems } from "./SidebarConfig";
import { Link, useNavigate } from "react-router-dom";
import CreatePostModal from "../Post/CreatePostModal";
import { useDisclosure } from "@chakra-ui/react";
import SearchComponents from "../SearchComponents/SearchComponents";
import logo from "../../assets/logo.svg";
import { BiLogOutCircle } from "react-icons/bi";
export const Sidebar = ({ isLoggedIn, handleLogout }) => {
  const [activeTab, setActiveTab] = useState("");
  const navigate = useNavigate();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isSearchVisible, setIsSearchVisible] = useState(false);
  const handleTabClick = (title) => {
    setActiveTab(title);
    if (title === "Profile") {
      setIsSearchVisible(false);
      navigate("/username");
    } else if (title === "Home") {
      setIsSearchVisible(false);
      navigate("/home");
    } else if (title === "Create") {
      setIsSearchVisible(false);
      onOpen();
    } else if (title === "Search") {
      setIsSearchVisible(true);
    } else if (title === "Workout") {
      setIsSearchVisible(false);
      navigate("/workout");
    } else {
      setIsSearchVisible(false);
    }
  };
  return (
    <div className="sticky top-0 h-[100vh] flex">
      <div
        className={`flex flex-col justify-between h-full ${
          activeTab === "Search" ? "px-2" : "px-10"
        }`}
      >
        {
          <div>
            {activeTab !== "Search" && (
              <div className="pt-10">
                <img className="w-40" src={logo} alt="" />
              </div>
            )}
            <div className="mt-10">
              {menuItems.map((item) => (
                <div
                  onClick={() => handleTabClick(item.title)}
                  className="flex items-center mb-5 cursor-pointer text-lg"
                >
                  {activeTab === item.title ? item.activeIcon : item.icon}
                  {activeTab !== "Search" && (
                    <p
                      className={`${
                        activeTab === item.title ? "font-bold" : "font-semibold"
                      }`}
                    >
                      {item.title}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        }
        <div
          className="flex items-center cursor-pointer pb-10"
          onClick={handleLogout}
        >
          <BiLogOutCircle className="text-2xl" />
          {activeTab !== "Search" && (
            <Link to="/">
              <p className="ml-5 ">LogOut</p>
            </Link>
          )}
        </div>
      </div>
      <CreatePostModal onClose={onClose} isOpen={isOpen} />
      {isSearchVisible && <SearchComponents />}
    </div>
  );
};
