import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import Footer from "../components/Footer";
import NavBar from "../components/Navbar";
import SearchBar from "../components/SearchBar";
import AnimalCard from "../components/AnimalCard";
import Pagination from "../components/Pagination";
import data from "../data/data.json";
import type { Animal } from "../types/Animal";
import BottomNav from "../components/BottomNav";
import TopBarMobile from "../components/TopBarMobile";

const animals: Animal[] = data;

function Research() {
  const [searchParams] = useSearchParams();

  const typeParam = searchParams.get("type") || "Tous les animaux";
  const locationParam = searchParams.get("location") || "";

  const [animalType, setAnimalType] = useState(typeParam);
  const [location, setLocation] = useState(locationParam);
  const [currentPage, setCurrentPage] = useState(1);

  const ITEMS_PER_PAGE = 8;

  const filteredAnimals = animals.filter((animal) => {
    const matchesType =
      animalType === "Tous les animaux" || animal.type === animalType;
    const matchesLocation =
      !location || animal.city.toLowerCase().includes(location.toLowerCase());
    return matchesType && matchesLocation;
  });

  // Calculer le nombre total de pages
  const totalPages = Math.ceil(filteredAnimals.length / ITEMS_PER_PAGE);

  // Obtenir les animaux pour la page actuelle
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const currentAnimals = filteredAnimals.slice(startIndex, endIndex);

  const handleSearch = (type: string, loc: string) => {
    setAnimalType(type);
    setLocation(loc);
    setCurrentPage(1); // Réinitialiser à la page 1 lors d'une nouvelle recherche
  };

  const resetFilters = () => {
    setAnimalType("Tous les animaux");
    setLocation("");
    setCurrentPage(1);
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    // Scroll vers le haut lors du changement de page
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      <TopBarMobile />
      {/* SearchBar avec fond gris clair */}
      <div className="bg-gray-100 py-10">
        <SearchBar
          onSearch={handleSearch}
          resultsCount={filteredAnimals.length}
          onResetFilters={resetFilters}
          showResultsCount={true}
        />
      </div>

      <div className="flex-1 bg-primary">
        <div className="max-w-7xl mx-auto px-4 py-12">
          {filteredAnimals.length > 0 ? (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {currentAnimals.map((animal) => (
                  <AnimalCard key={animal.id} animal={animal} />
                ))}
              </div>

              {/* Pagination */}
              <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={handlePageChange}
              />
            </>
          ) : (
            <div className="text-center py-20">
              <p className="text-xl text-deep-grey">
                Aucun animal ne correspond à votre recherche. 😢
              </p>
              <button
                onClick={resetFilters}
                className="mt-4 bg-secondary text-white px-6 py-3 rounded-lg hover:bg-btn-secondary-hover"
              >
                Réinitialiser les filtres
              </button>
            </div>
          )}
        </div>
      </div>
      <BottomNav />
      <Footer />
    </div>
  );
}

export default Research;
