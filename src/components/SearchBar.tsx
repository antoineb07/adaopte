import { useState, useMemo } from 'react';
import Button from './Button';
import { FiSearch } from 'react-icons/fi';
import data from '../data/data.json';
import type { Animal } from '../types/Animal';

type SearchBarProps = {
  onSearch: (type: string, location: string) => void;
  resultsCount?: number;
  onResetFilters: () => void;
  showResultsCount?: boolean;
};

export default function SearchBar({ 
  onSearch, 
  resultsCount = 0, 
  onResetFilters,
  showResultsCount = true 
}: SearchBarProps) {
  const [animalType, setAnimalType] = useState<string>('Tous les animaux');
  const [location, setLocation] = useState<string>('');

  // Extraire les types uniques depuis le JSON
  const animalTypes = useMemo(() => {
    const animals: Animal[] = data;
    const types = animals.map(animal => animal.type);
    const uniqueTypes = Array.from(new Set(types)).sort();
    return ['Tous les animaux', ...uniqueTypes];
  }, []);

  const handleSearch = () => {
    onSearch(animalType, location);
  };

  return (
    <div className="px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-end">
            <div>
              <label htmlFor="animal-type" className="block text-sm font-medium text-gray-700 mb-1.5">
                Type d'animal
              </label>
              <select
                id="animal-type"
                value={animalType}
                onChange={(e) => setAnimalType(e.target.value)}
                className="w-full px-3 py-2.5 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent bg-white text-gray-800 text-sm"
              >
                {animalTypes.map((type) => (
                  <option key={type} value={type}>
                    {type}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-1.5">
                Localisation
              </label>
              <input
                id="location"
                type="text"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                placeholder="Votre ville"
                className="w-full px-3 py-2.5 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent text-gray-800 text-sm placeholder-gray-400"
              />
            </div>
            <div>
              <Button
                variant="primary"
                size="md"
                onClick={handleSearch}
                className="w-full text-sm gap-2"
              >
                Rechercher
                <FiSearch size={18} />
              </Button>
            </div>
          </div>
        </div>
        
        {showResultsCount && (
          <div className="flex justify-between items-center mt-4 px-1">
            <p className="text-gray-700 font-medium text-sm">
              {resultsCount} animaux trouvés
            </p>
            <button
              onClick={onResetFilters}
              className="text-green-600 hover:text-green-700 font-medium text-sm"
            >
              Réinitialiser les filtres
            </button>
          </div>
        )}
      </div>
    </div>
  );
}