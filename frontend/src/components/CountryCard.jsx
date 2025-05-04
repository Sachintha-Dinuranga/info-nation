import { Link } from "react-router-dom";
import { FiGlobe, FiMapPin, FiUsers, FiHeart } from "react-icons/fi";
import { AiFillHeart } from "react-icons/ai";
import { useFavorites } from "../context/FavoritesContext";
import React from "react";

const CountryCard = ({ country }) => {
  const { addFavorite, removeFavorite, isFavorite } = useFavorites();
  const fav = isFavorite(country.cca3);

  const toggleFavorite = (e) => {
    e.stopPropagation(); // stop event bubbling to Link
    e.preventDefault(); // prevent navigating when clicking heart
    if (fav) {
      removeFavorite(country.cca3);
    } else {
      addFavorite(country);
    }
  };

  return (
    <div className="relative w-full sm:w-64">
      {/* Heart Icon */}
      <button
        onClick={toggleFavorite}
        className="absolute bottom-2 right-2 text-2xl hover:scale-110 transition z-10"
      >
        {fav ? (
          <AiFillHeart className="text-red-500" />
        ) : (
          <FiHeart className="text-gray-300" />
        )}
      </button>

      {/* Card linked to details */}
      <Link to={`/country/${country.cca3}`}>
        <div className="bg-white rounded-xl shadow-md p-4 transition transform duration-300 hover:scale-105 hover:shadow-xl">
          <img
            src={country.flags.svg}
            alt={`${country.name.common} flag`}
            className="w-full h-40 object-cover rounded-lg mb-4"
          />

          <h3 className="text-lg font-semibold mb-2 text-gray-800 flex items-center gap-2">
            <FiMapPin className="text-blue-600" />
            {country.name.common}
          </h3>

          <p className="flex items-center gap-2 text-sm text-gray-600">
            <FiGlobe className="text-blue-500" />
            <strong>Region:</strong> {country.region}
          </p>

          <p className="flex items-center gap-2 text-sm text-gray-600">
            <FiMapPin className="text-blue-500" />
            <strong>Capital:</strong> {country.capital?.[0] || "N/A"}
          </p>

          <p className="flex items-center gap-2 text-sm text-gray-600">
            <FiUsers className="text-blue-500" />
            <strong>Population:</strong> {country.population.toLocaleString()}
          </p>
        </div>
      </Link>
    </div>
  );
};

export default CountryCard;
