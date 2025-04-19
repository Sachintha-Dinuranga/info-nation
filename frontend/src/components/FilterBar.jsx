const regions = ["Africa", "Americas", "Asia", "Europe", "Oceania"];
const languages = [
  { label: "English", code: "english" },
  { label: "Spanish", code: "spanish" },
  { label: "French", code: "french" },
  { label: "Arabic", code: "arabic" },
  { label: "Chinese", code: "chinese" },
  { label: "Hindi", code: "hindi" },
];

const FilterBar = ({
  onRegionChange,
  onLanguageChange,
  selectedRegion,
  selectedLanguage,
  onClearFilters,
}) => {
  return (
    <div className="flex flex-wrap justify-center gap-4 mb-6">
      <select
        onChange={onRegionChange}
        value={selectedRegion}
        className="px-4 py-2 border rounded-lg shadow-sm focus:ring-2 focus:ring-blue-400"
      >
        <option value="">Filter by Region</option>
        {regions.map((region) => (
          <option key={region} value={region.toLowerCase()}>
            {region}
          </option>
        ))}
      </select>

      <select
        onChange={onLanguageChange}
        value={selectedLanguage}
        className="px-4 py-2 border rounded-lg shadow-sm focus:ring-2 focus:ring-blue-400"
      >
        <option value="">Filter by Language</option>
        {languages.map((lang) => (
          <option key={lang.code} value={lang.code}>
            {lang.label}
          </option>
        ))}
      </select>
      <button
        onClick={onClearFilters}
        className="bg-gray-200 text-gray-800 px-4 py-2 rounded-lg hover:bg-gray-300 transition"
      >
        Clear Filters
      </button>
    </div>
  );
};

export default FilterBar;
