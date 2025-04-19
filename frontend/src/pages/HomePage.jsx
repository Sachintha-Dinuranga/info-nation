import React from "react";

import { useEffect, useState } from "react";
import CountryCard from "../components/CountryCard";

const HomePage = () => {
  const [countries, setCountries] = useState([]);
  const [visibleCount, setVisibleCount] = useState(12); // Show 12 initially
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const res = await fetch("https://restcountries.com/v3.1/all");
        const data = await res.json();

        // Optional: sort alphabetically for better UX
        const sorted = data.sort((a, b) =>
          a.name.common.localeCompare(b.name.common)
        );

        setCountries(sorted);
        setLoading(false);
      } catch (err) {
        console.error("Failed to fetch countries:", err);
        setLoading(false);
      }
    };

    fetchCountries();
  }, []);

  const handleSeeMore = () => {
    setVisibleCount((prev) => prev + 12); // Load 12 more each time
  };

  const visibleCountries = countries.slice(0, visibleCount);

  if (loading) {
    return <p className="text-center mt-10 text-lg">Loading countries...</p>;
  }

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h2 className="text-2xl font-bold mb-6 text-center">Explore Countries</h2>

      <div className="flex flex-wrap justify-center gap-6">
        {visibleCountries.map((country) => (
          <CountryCard key={country.cca3} country={country} />
        ))}
      </div>

      {visibleCount < countries.length && (
        <div className="text-center mt-8">
          <button
            onClick={handleSeeMore}
            className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
          >
            See More
          </button>
        </div>
      )}
    </div>
  );
};

export default HomePage;
