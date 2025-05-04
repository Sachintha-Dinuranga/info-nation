import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import {
  FiGlobe,
  FiMapPin,
  FiUsers,
  FiClock,
  FiTrendingUp,
  FiFlag,
  FiArrowLeftCircle,
  FiExternalLink,
} from "react-icons/fi";
import React from "react";

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
    return (
      <div className="flex justify-center items-center min-h-screen">
        <p className="text-lg text-gray-600">Loading country details...</p>
      </div>
    );

  if (!country)
    return (
      <div className="text-center mt-10 text-red-500">Country not found.</div>
    );

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-white to-blue-50 p-6">
      <div className="max-w-6xl mx-auto">
        <Link
          to="/"
          className="flex items-center gap-2 text-blue-600 mb-6 hover:underline"
        >
          <FiArrowLeftCircle />
          Back to Home
        </Link>

        <div className="bg-white p-6 rounded-xl shadow-xl grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Flag & Coat of Arms */}
          <div>
            <img
              src={country.flags.svg}
              alt={`${country.name.common} flag`}
              className="rounded-xl shadow-md w-full h-64 object-cover"
            />
            {country.coatOfArms?.svg && (
              <img
                src={country.coatOfArms.svg}
                alt="Coat of Arms"
                className="w-24 h-24 mx-auto mt-4"
              />
            )}
          </div>

          {/* Country Info */}
          <div className="space-y-4">
            <h2 className="text-3xl font-bold text-gray-800 flex items-center gap-2">
              <FiFlag /> {country.name.common}
            </h2>

            <p className="flex items-center gap-2 text-gray-700">
              <FiGlobe />
              <strong>Region:</strong> {country.region} |{" "}
              {country.subregion || "N/A"}
            </p>

            <p className="flex items-center gap-2 text-gray-700">
              <FiMapPin />
              <strong>Capital:</strong> {country.capital?.[0] || "N/A"}
            </p>

            <p className="flex items-center gap-2 text-gray-700">
              <FiUsers />
              <strong>Population:</strong> {country.population.toLocaleString()}
            </p>

            <p className="flex items-center gap-2 text-gray-700">
              <FiTrendingUp />
              <strong>Area:</strong> {country.area.toLocaleString()} km²
            </p>

            <p className="text-gray-700">
              <strong>Languages:</strong>{" "}
              {country.languages
                ? Object.values(country.languages).join(", ")
                : "N/A"}
            </p>

            <p className="text-gray-700">
              <strong>Currencies:</strong>{" "}
              {country.currencies
                ? Object.values(country.currencies)
                    .map((c) => c.name)
                    .join(", ")
                : "N/A"}
            </p>

            <p className="flex items-center gap-2 text-gray-700">
              <FiClock />
              <strong>Timezones:</strong>{" "}
              {country.timezones?.join(", ") || "N/A"}
            </p>

            {country.maps?.googleMaps && (
              <a
                href={country.maps.googleMaps}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 mt-2 text-white bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg transition"
              >
                <FiExternalLink />
                View on Google Maps
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountryDetails;
