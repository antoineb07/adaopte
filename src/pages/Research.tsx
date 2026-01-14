import Footer from "../components/Footer";
import NavBar from "../components/Navbar";
import ResearchHeader from "../components/ResearchHeader";
import ResearchContent from "../components/ResearchContent";
import BottomNav from "../components/BottomNav";
import TopBarMobile from "../components/TopBarMobile";
import { useAnimalSearch } from "../types/UseAnimalSearch";

export default function Research() {
  const {
    filteredAnimals,
    currentPage,
    totalPages,
    handleSearch,
    resetFilters,
    handlePageChange,
  } = useAnimalSearch();

  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      <TopBarMobile />
      <ResearchHeader
        onSearch={handleSearch}
        resultsCount={filteredAnimals.length}
        onResetFilters={resetFilters}
      />
      <ResearchContent
        animals={filteredAnimals}
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
        onResetFilters={resetFilters}
      />
      <BottomNav />
      <Footer />
    </div>
  );
}