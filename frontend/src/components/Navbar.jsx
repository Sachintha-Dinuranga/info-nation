import { Link, useNavigate, useLocation } from "react-router-dom";
// import { isAuthenticated } from "../utils/auth";
import { auth } from "../firebase";
import { signOut } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import toast from "react-hot-toast";
import React from "react";

import {
  FiLogIn,
  FiLogOut,
  FiUserPlus,
  FiGlobe,
  FiHeart,
} from "react-icons/fi";

const Navbar = () => {
  // useNavigate hook to programmatically navigate between routes
  const navigate = useNavigate();
  const [user] = useAuthState(auth); // Get the current user
  const location = useLocation(); // Get the current route

  // Function to handle user logout
  const handleLogout = async () => {
    await signOut(auth);
    toast.success("Logged out successfully!");
    navigate("/login"); // Redirecting the user to the login page
  };

  return (
    <nav className="bg-gradient-to-r from-indigo-500 via-blue-500 to-purple-500 text-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-3 flex justify-between items-center">
        {/* Logo */}
        <Link
          to="/"
          className="flex items-center space-x-2 font-extrabold text-xl tracking-wide"
        >
          <FiGlobe className="text-2xl" />
          <span>InfoNation</span>
        </Link>

        {/* Nav Buttons */}
        <div className="space-x-5 text-sm font-medium">
          {location.pathname !== "/login" &&
            location.pathname !== "/register" && (
              <Link
                to="/favourites"
                className="inline-flex items-center gap-1 hover:text-pink-300 transition"
              >
                <FiHeart />
                Favourites
              </Link>
            )}

          {!user ? (
            <>
              <Link
                to="/login"
                className="inline-flex items-center gap-1 hover:text-white/90 transition"
              >
                <FiLogIn />
                Login
              </Link>
              <Link
                to="/register"
                className="inline-flex items-center gap-1 hover:text-white/90 transition"
              >
                <FiUserPlus />
                Register
              </Link>
            </>
          ) : (
            // If the user is authenticated, show the Logout button
            <button
              onClick={handleLogout}
              className="inline-flex items-center gap-1 hover:text-white/90 transition"
            >
              <FiLogOut />
              Logout
            </button>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
