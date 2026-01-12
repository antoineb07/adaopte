import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import Footer from "../components/Footer";
import NavBar from "../components/Navbar";
import SearchBar from "../components/SearchBar";
import AnimalCard from "../components/AnimalCard";
import data from "../data/data.json";
import type { Animal } from "../types/Animal";

const animals: Animal[] = data;

function Research() {
  const [searchParams] = useSearchParams();
  
  const typeParam = searchParams.get('type') || 'Tous les animaux';
  const locationParam = searchParams.get('location') || '';
  
  const [animalType, setAnimalType] = useState(typeParam);
  const [location, setLocation] = useState(locationParam);

  const filteredAnimals = animals.filter(animal => {
    const matchesType = animalType === 'Tous les animaux' || animal.type === animalType;
    const matchesLocation = !location || animal.city.toLowerCase().includes(location.toLowerCase());
    return matchesType && matchesLocation;
  });

  const handleSearch = (type: string, loc: string) => {
    setAnimalType(type);
    setLocation(loc);
  };

  const resetFilters = () => {
    setAnimalType('Tous les animaux');
    setLocation('');
  };

  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      
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
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {filteredAnimals.map(animal => (
                <AnimalCard key={animal.id} animal={animal} />
              ))}
            </div>
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

      <Footer />
    </div>
  );
}

export default Research;