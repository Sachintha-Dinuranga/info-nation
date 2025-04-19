import React from "react";

const SearchBar = ({ value, onChange }) => {
  return (
    <div className="flex justify-center mb-6">
      <input
        type="text"
        placeholder="Search for a country..."
        value={value}
        onChange={onChange}
        className="w-full max-w-md px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
      />
    </div>
  );
};

export default SearchBar;
