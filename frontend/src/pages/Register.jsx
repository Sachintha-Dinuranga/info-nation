//

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { FiUserPlus } from "react-icons/fi";

const Register = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const res = await fetch("http://localhost:5000/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Registration failed");

      toast.success("Registration successful! You can now login.");
      navigate("/login");
    } catch (err) {
      setError(err.message);
      toast.error(err.message);
    }
  };

  return (
    <div className="min-h-screen grid grid-cols-1 md:grid-cols-2">
      {/* Left Side: Register Form */}
      <div className="flex items-center justify-center p-10 bg-white">
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-md space-y-5 bg-gray-50 p-8 rounded-xl shadow-lg"
        >
          <h2 className="text-2xl font-semibold text-center text-gray-800 flex items-center justify-center gap-2">
            <FiUserPlus className="text-blue-600" />
            Create an Account
          </h2>

          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            placeholder="Username"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />

          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />

          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Password"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />

          {error && <p className="text-red-500 text-sm text-center">{error}</p>}

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg font-medium transition"
          >
            Register
          </button>
        </form>
      </div>

      {/* Right Side: Art / Text */}
      <div className="hidden md:flex flex-col items-center justify-center bg-gradient-to-br from-purple-500 to-indigo-600 text-white p-10 text-center">
        <img
          src="/src/assests/register.svg"
          alt="Globe illustration"
          className="w-2/3 max-w-md mb-6"
        />
        <h2 className="text-3xl font-bold">Join the World Explorer!</h2>
        <p className="max-w-sm mt-2">
          Create an account to search and learn about every country on Earth.
        </p>
      </div>
    </div>
  );
};

export default Register;
