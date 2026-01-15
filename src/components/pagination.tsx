type PaginationProps = {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
};

export default function Pagination({
  currentPage,
  totalPages,
  onPageChange,
}: PaginationProps) {
  // Générer les numéros de page à afficher
  const getPageNumbers = (): (number | string)[] => {
    const pages: (number | string)[] = [];

    if (totalPages <= 5) {
      // Si 5 pages ou moins, afficher toutes les pages
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      // Sinon, afficher intelligemment avec des ellipses
      if (currentPage <= 3) {
        pages.push(1, 2, 3, 4, "...", totalPages);
      } else if (currentPage >= totalPages - 2) {
        pages.push(
          1,
          "...",
          totalPages - 3,
          totalPages - 2,
          totalPages - 1,
          totalPages
        );
      } else {
        pages.push(
          1,
          "...",
          currentPage - 1,
          currentPage,
          currentPage + 1,
          "...",
          totalPages
        );
      }
    }

    return pages;
  };

  if (totalPages <= 1) return null;

  return (
    <nav aria-label="Pagination" className="flex justify-center py-8">
      <ul className="flex gap-2">
        {/* Bouton Précédent */}
        <li>
          <button
            onClick={() => onPageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className={`relative block rounded px-4 py-2 text-sm font-medium transition-all duration-300 ${
              currentPage === 1
                ? "pointer-events-none text-gray-400 cursor-not-allowed"
                : "text-gray-700 hover:bg-gray-100 bg-white"
            }`}
          >
            Précédent
          </button>
        </li>

        {/* Numéros de page */}
        {getPageNumbers().map((page, index) => (
          <li
            key={
              typeof page === "number" ? `page-${page}` : `ellipsis-${index}`
            }
          >
            {page === "..." ? (
              <span className="relative block px-4 py-2 text-sm text-gray-500">
                ...
              </span>
            ) : (
              <button
                onClick={() => {
                  if (typeof page === "number") {
                    onPageChange(page);
                  }
                }}
                className={`relative block rounded px-4 py-2 text-sm font-medium transition-all duration-300 ${
                  currentPage === page
                    ? "bg-btn-secondary text-white"
                    : "bg-white text-gray-700 hover:bg-gray-100"
                }`}
                aria-current={currentPage === page ? "page" : undefined}
              >
                {page}
              </button>
            )}
          </li>
        ))}

        {/* Bouton Suivant */}
        <li>
          <button
            onClick={() => onPageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className={`relative block rounded px-4 py-2 text-sm font-medium transition-all duration-300 ${
              currentPage === totalPages
                ? "pointer-events-none text-gray-400 cursor-not-allowed"
                : "bg-white text-gray-700 hover:bg-gray-100"
            }`}
          >
            Suivant
          </button>
        </li>
      </ul>
    </nav>
  );
}
