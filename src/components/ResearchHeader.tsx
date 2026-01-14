import SearchBar from "./SearchBar";

type ResearchHeaderProps = {
  onSearch: (type: string, location: string) => void;
  resultsCount: number;
  onResetFilters: () => void;
};

export default function ResearchHeader({
  onSearch,
  resultsCount,
  onResetFilters,
}: ResearchHeaderProps) {
  return (
    <div className="bg-gray-100 py-10">
      <SearchBar
        onSearch={onSearch}
        resultsCount={resultsCount}
        onResetFilters={onResetFilters}
        showResultsCount={true}
      />
    </div>
  );
}