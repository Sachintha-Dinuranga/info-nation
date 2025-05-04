import { FiSearch } from "react-icons/fi";
import React from "react";

// SearchBar component to render a search input field with an icon
const SearchBar = ({ value, onChange }) => {
  return (
    <div className="flex justify-center mb-6">
      <div className="relative w-full max-w-md">
        <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
          <FiSearch />
        </span>
        <input
          type="text"
          value={value} // Controlled input value passed as a prop
          onChange={onChange} // Event handler for input changes passed as a prop
          placeholder="Search for a country..."
          className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
      </div>
    </div>
  );
};

export default SearchBar;
