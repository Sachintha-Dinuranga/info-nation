import React from "react";

import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import PageWrapper from "../components/PageWrapper";

const CountryDetails = () => {
  const { code } = useParams();
  const [country, setCountry] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCountry = async () => {
      try {
        const res = await fetch(`https://restcountries.com/v3.1/alpha/${code}`);
        const data = await res.json();
        setCountry(data[0]);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching country details:", err);
        setLoading(false);
      }
    };

    fetchCountry();
  }, [code]);

  if (loading)
    return <p className="text-center mt-10">Loading country details...</p>;

  if (!country) return <p className="text-center mt-10">Country not found.</p>;

  return (
    <PageWrapper>
      <div className="p-6 bg-gray-100 min-h-screen">
        <Link to="/" className="text-blue-600 underline mb-4 inline-block">
          ← Back to Home
        </Link>

        <div className="bg-white p-6 rounded-lg shadow-md max-w-3xl mx-auto">
          <img
            src={country.flags.svg}
            alt={country.name.common}
            className="w-full h-64 object-cover rounded-md mb-4"
          />
          <h2 className="text-2xl font-bold mb-2">{country.name.common}</h2>
          <p>
            <strong>Capital:</strong> {country.capital?.[0] || "N/A"}
          </p>
          <p>
            <strong>Region:</strong> {country.region}
          </p>
          <p>
            <strong>Population:</strong> {country.population.toLocaleString()}
          </p>
          <p>
            <strong>Languages:</strong>{" "}
            {country.languages
              ? Object.values(country.languages).join(", ")
              : "N/A"}
          </p>
          <p>
            <strong>Timezones:</strong> {country.timezones?.join(", ")}
          </p>
          <p>
            <strong>Area:</strong> {country.area} km²
          </p>
        </div>
      </div>
    </PageWrapper>
  );
};

export default CountryDetails;
