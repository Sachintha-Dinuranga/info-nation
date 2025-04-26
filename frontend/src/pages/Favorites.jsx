import { useFavorites } from "../context/FavoritesContext";
import CountryCard from "../components/CountryCard";

const Favourites = () => {
  const { favorites } = useFavorites();

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h2 className="text-2xl font-bold mb-6 text-center">
        Your Favorite Countries ❤️
      </h2>

      {favorites.length === 0 ? (
        <p className="text-center text-gray-500">You have no favorites yet.</p>
      ) : (
        <div className="flex flex-wrap justify-center gap-6">
          {favorites.map((country) => (
            <CountryCard key={country.cca3} country={country} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Favourites;
