import React, { useState } from "react";
import googleicon from "../../assets/google.svg";
import facebookicon from "../../assets/facebook.svg";
import appleicon from "../../assets/apple.svg";
import pageimage from "../../assets/amico.svg";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { Router } from "../Router/Router";

function UserLogin() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleEmailChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleLogin = async () => {
    try {
      const response = await axios.post(
        "http://localhost:8080/api/auth/login",
        { username, password }
      );

      // Check if login was successful
      if (response.status === 200) {
        console.log("Login successful:", response.data.userId);
        // Navigate to dashboard after successful login
        navigate(`/home/${response.data.userId}`);

        // Clear the form and error state
        setUsername("");
        setPassword("");
        setError(null);
      } else {
        // Handle other status codes if needed
        setError("Login failed. Please try again.");
      }
    } catch (error) {
      console.error("Login failed:", error.response.data);
      setError(error.response.data.message || "An error occurred.");
    }
  };

  return (
    <div className="flex flex-row justify-center items-center h-screen">
      <div className="w-96 bg-white rounded-lg shadow-lg p-6">
        <h2 className="text-2xl font-bold mb-4 text-indigo-500">Sign in</h2>
        <div className="mb-4">
          <label
            htmlFor="username"
            className="block text-gray-700 font-bold mb-2"
          >
            Username
          </label>
          <input
            type="text"
            id="username"
            className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={username}
            onChange={handleEmailChange}
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="password"
            className="block text-gray-700 font-bold mb-2"
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={password}
            onChange={handlePasswordChange}
          />
        </div>
        {error && <p className="text-red-500">{error}</p>}
        <button
          className="bg-indigo-400 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4 w-full"
          onClick={handleLogin}
        >
          Login
        </button>
        <div className="flex flex-col justify-between items-center">
          <div className="mb-2">
            <a href="" className="text-indigo-500 hover:underline">
              Forget Password?
            </a>
          </div>
          <div>
            <p className="text-gray-600">Or sign in with:</p>
            <div className="flex mt-2">
              <img
                src={googleicon}
                alt="Google"
                className="w-6 h-6 mr-2 cursor-pointer"
              />
              <img
                src={facebookicon}
                alt="Facebook"
                className="w-6 h-6 mr-2 cursor-pointer"
              />
              <img
                src={appleicon}
                alt="Apple"
                className="w-6 h-6 cursor-pointer"
              />
            </div>
          </div>
          <div className="mt-2">
            <p className="text-gray-600">
              No account?{" "}
              <Link to="/register" className="text-indigo-500 hover:underline">
                Sign Up
              </Link>
            </p>
          </div>
        </div>
      </div>
      {/* Picture on the right-hand side */}
      <img src={pageimage} alt="" className="h-5/6 ml-10" />
    </div>
  );
}

export default UserLogin;
