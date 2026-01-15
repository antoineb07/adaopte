import AnimalCard from "./AnimalCard";
import Pagination from "./Pagination";
import type { Animal } from "../types/Animal";

type ResearchContentProps = {
  animals: Animal[];
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  onResetFilters: () => void;
};

const ITEMS_PER_PAGE = 8;

export default function ResearchContent({
  animals,
  currentPage,
  totalPages,
  onPageChange,
  onResetFilters,
}: ResearchContentProps) {
  // Obtenir les animaux pour la page actuelle
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const currentAnimals = animals.slice(startIndex, endIndex);

  const handlePageChange = (page: number) => {
    onPageChange(page);
    // Scroll vers le haut lors du changement de page
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (animals.length === 0) {
    return (
      <div className="flex-1 bg-primary">
        <div className="max-w-7xl mx-auto px-4 py-12">
          <div className="text-center py-20">
            <p className="text-xl text-deep-grey">
              Aucun animal ne correspond à votre recherche. 😢
            </p>
            <button
              onClick={onResetFilters}
              className="mt-4 bg-secondary text-white px-6 py-3 rounded-lg hover:bg-btn-secondary-hover"
            >
              Réinitialiser les filtres
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex-1 bg-primary">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {currentAnimals.map((animal) => (
            <AnimalCard key={animal.id} animal={animal} />
          ))}
        </div>

        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      </div>
    </div>
  );
}
