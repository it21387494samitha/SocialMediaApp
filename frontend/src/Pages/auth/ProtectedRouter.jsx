import React from "react";
import { Navigate, Route } from "react-router-dom";

// Define your authentication logic here
const isAuthenticated = () => {
  // Check if the user is authenticated (e.g., check token in localStorage)
  // Replace this with your actual authentication logic
  const token = localStorage.getItem("token");
  return token !== null;
};

const ProtectedRoute = ({ element, ...rest }) => {
  return isAuthenticated() ? (
    <Route {...rest} element={element} />
  ) : (
    <Navigate to="/" replace />
  );
};

export default ProtectedRoute;
