import { Link } from "react-router-dom";
import { FiGlobe, FiMapPin, FiUsers } from "react-icons/fi";

const CountryCard = ({ country }) => {
  return (
    <Link to={`/country/${country.cca3}`} className="w-full sm:w-64">
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
  );
};

export default CountryCard;
