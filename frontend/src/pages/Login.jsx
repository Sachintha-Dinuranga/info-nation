import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import toast from "react-hot-toast";
import { FiLogIn, FiEye, FiEyeOff } from "react-icons/fi";
import React from "react";

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      await signInWithEmailAndPassword(auth, formData.email, formData.password);
      toast.success("Login successful!");
      navigate("/");
    } catch (err) {
      setError(err.message);
      toast.error(err.message);
    }
  };
  return (
    <div className="min-h-screen grid grid-cols-1 md:grid-cols-2">
      {/* Left Side: Login Form */}
      <div className="flex items-center justify-center p-10 bg-white">
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-md space-y-5 bg-gray-50 p-8 rounded-xl shadow-lg"
        >
          <h2 className="text-2xl font-semibold text-center text-gray-800 flex items-center justify-center gap-2">
            <FiLogIn className="text-blue-600" />
            Login to Your Account
          </h2>

          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />

          <div className="relative w-full">
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Password"
              className="w-full px-4 py-2 pr-10 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
            <button
              type="button"
              onClick={togglePasswordVisibility}
              className="absolute inset-y-0 right-0 flex items-center px-3 text-gray-500 hover:text-gray-700"
              aria-label={showPassword ? "Hide password" : "Show password"}
            >
              {showPassword ? <FiEyeOff size={18} /> : <FiEye size={18} />}
            </button>
          </div>

          {error && <p className="text-red-500 text-sm text-center">{error}</p>}

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-indigo-500 to-blue-500 hover:bg-blue-700 text-white py-2 rounded-lg font-medium transition"
          >
            Login
          </button>
        </form>
      </div>

      {/* Right Side: Art / Pattern */}
      <div className="hidden md:flex flex-col items-center justify-center bg-gradient-to-br from-blue-500 to-indigo-600 text-white p-10 text-center">
        <img
          src="/src/assests/world.svg"
          alt="Map illustration"
          className="w-2/3 max-w-md mb-6"
        />

        <h2 className="text-3xl font-bold">Explore the World</h2>
        <p className="mt-2 max-w-sm">
          Discover information about every country on Earth — all in one place.
          Learn, search, and explore with ease.
        </p>
      </div>
    </div>
  );
};

export default Login;
