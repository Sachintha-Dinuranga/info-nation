import React from "react";

const CountryCard = ({ country }) => {
  return (
    <div className="bg-white rounded-xl shadow-md p-4 w-full sm:w-64">
      <img
        src={country.flags.svg}
        alt={`${country.name.common} flag`}
        className="w-full h-40 object-cover rounded-lg mb-4"
      />
      <h3 className="text-lg font-semibold">{country.name.common}</h3>
      <p>
        <strong>Region:</strong> {country.region}
      </p>
      <p>
        <strong>Capital:</strong> {country.capital?.[0]}
      </p>
      <p>
        <strong>Population:</strong> {country.population.toLocaleString()}
      </p>
    </div>
  );
};

export default CountryCard;
