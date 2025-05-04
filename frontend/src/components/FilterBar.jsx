import Select from "react-select";
import React from "react";

const regions = ["Africa", "Americas", "Asia", "Europe", "Oceania"];

const languages = [
  { label: "English", code: "english" },
  { label: "Spanish", code: "spanish" },
  { label: "French", code: "french" },
  { label: "Arabic", code: "arabic" },
  { label: "Chinese", code: "chinese" },
  { label: "Hindi", code: "hindi" },
  { label: "Portuguese", code: "portuguese" },
  { label: "Russian", code: "russian" },
  { label: "German", code: "german" },
  { label: "Japanese", code: "japanese" },
  { label: "Korean", code: "korean" },
];

const languageOptions = languages.map((lang) => ({
  value: lang.code,
  label: lang.label,
}));

const FilterBar = ({
  onRegionChange,
  onLanguageChange,
  selectedRegion,
  selectedLanguage,
  onClearFilters,
}) => {
  return (
    <div className="flex flex-wrap justify-center gap-4 mb-8">
      {/* Region Dropdown */}
      <select
        onChange={onRegionChange}
        value={selectedRegion}
        className="px-4 py-2 rounded-lg border border-gray-300 shadow-sm focus:ring-2 focus:ring-blue-400 focus:outline-none transition"
      >
        <option value="">🌍 Filter by Region</option>
        {regions.map((region) => (
          <option key={region} value={region.toLowerCase()}>
            {region}
          </option>
        ))}
      </select>

      {/* Language Select with React-Select */}
      <div className="min-w-[240px]">
        <Select
          options={languageOptions}
          onChange={(selected) =>
            onLanguageChange({ target: { value: selected?.value || "" } })
          }
          value={
            selectedLanguage
              ? languageOptions.find((opt) => opt.value === selectedLanguage)
              : null
          }
          placeholder="🗣️ Filter by Language"
          isClearable
          className="text-sm"
        />
      </div>

      {/* Clear Filters */}
      <button
        onClick={onClearFilters}
        className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition font-medium"
      >
        ❌ Clear Filters
      </button>
    </div>
  );
};

export default FilterBar;
