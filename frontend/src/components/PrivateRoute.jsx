import { Navigate } from "react-router-dom";
import { isAuthenticated } from "../utils/auth";

// PrivateRoute component to restrict access to authenticated users
const PrivateRoute = ({ children }) => {
  // If the user is authenticated, render the child components
  // Otherwise, redirect the user to the login page
  return isAuthenticated() ? children : <Navigate to="/login" />;
};

export default PrivateRoute;
