import React from "react";

import { useEffect, useState } from "react";
import CountryCard from "../components/CountryCard";
import SearchBar from "../components/SearchBar";
import FilterBar from "../components/FilterBar";
import PageWrapper from "../components/PageWrapper";

const HomePage = () => {
  const [countries, setCountries] = useState([]);
  const [visibleCount, setVisibleCount] = useState(12); // Show 12 initially
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const [region, setRegion] = useState("");
  const [language, setLanguage] = useState("");

  // fetch all the countries
  const fetchCountries = async () => {
    try {
      const res = await fetch("https://restcountries.com/v3.1/all");
      const data = await res.json();

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

  useEffect(() => {
    fetchCountries();
  }, []);

  // see more function
  const handleSeeMore = () => {
    setVisibleCount((prev) => prev + 12); // Load 12 more each time
  };

  const visibleCountries = countries.slice(0, visibleCount);

  if (loading) {
    return <p className="text-center mt-10 text-lg">Loading countries...</p>;
  }

  // search function
  const handleSearchChange = async (e) => {
    const query = e.target.value;
    setSearch(query);
    setVisibleCount(12);

    if (query.trim() === "") {
      // Refetch all countries
      const res = await fetch("https://restcountries.com/v3.1/all");
      const data = await res.json();
      const sorted = data.sort((a, b) =>
        a.name.common.localeCompare(b.name.common)
      );
      setCountries(sorted);
    } else {
      try {
        const res = await fetch(`https://restcountries.com/v3.1/name/${query}`);
        if (!res.ok) throw new Error("No results found");
        const data = await res.json();
        const sorted = data.sort((a, b) =>
          a.name.common.localeCompare(b.name.common)
        );
        setCountries(sorted);
      } catch (err) {
        setCountries([]); // Empty result
      }
    }
  };

  // filter by language
  const handleLanguageChange = async (e) => {
    const selectedLang = e.target.value;
    setLanguage(selectedLang);
    setRegion("");
    setSearch("");
    setVisibleCount(12);

    if (selectedLang === "") {
      fetchCountries();
    } else {
      try {
        const res = await fetch(
          `https://restcountries.com/v3.1/lang/${selectedLang}`
        );
        if (!res.ok) throw new Error("No results");
        const data = await res.json();
        const sorted = data.sort((a, b) =>
          a.name.common.localeCompare(b.name.common)
        );
        setCountries(sorted);
      } catch (err) {
        setCountries([]);
      }
    }
  };

  // filter by region
  const handleRegionChange = async (e) => {
    const selectedRegion = e.target.value;
    setRegion(selectedRegion);
    setLanguage(""); // reset language
    setSearch("");
    setVisibleCount(12);

    if (selectedRegion === "") {
      fetchAllCountries();
    } else {
      try {
        const res = await fetch(
          `https://restcountries.com/v3.1/region/${selectedRegion}`
        );
        const data = await res.json();
        setCountries(data);
      } catch (err) {
        setCountries([]);
      }
    }
  };

  // clear fileter
  const handleClearFilters = () => {
    setSearch("");
    setRegion("");
    setLanguage("");
    setVisibleCount(12);
    fetchCountries(); // restore the original data
  };

  return (
    <PageWrapper>
      <div className="p-6 min-h-screen bg-white">
        <h2 className="text-2xl font-bold mb-6 text-center">
          Explore Countries🌍
        </h2>

        <SearchBar value={search} onChange={handleSearchChange} />

        <FilterBar
          onRegionChange={handleRegionChange}
          onLanguageChange={handleLanguageChange}
          selectedRegion={region}
          selectedLanguage={language}
          onClearFilters={handleClearFilters}
        />

        <div className="flex flex-wrap justify-center gap-6">
          {visibleCountries.map((country) => (
            <CountryCard key={country.cca3} country={country} />
          ))}
        </div>

        {visibleCount < countries.length && (
          <div className="text-center mt-8">
            <button
              onClick={handleSeeMore}
              className="bg-gradient-to-r from-indigo-500 to-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
            >
              See More
            </button>
          </div>
        )}
      </div>
    </PageWrapper>
  );
};

export default HomePage;
