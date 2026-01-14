import { useState, useMemo, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import data from "../data/data.json";
import type { Animal } from "../types/Animal";

const animals: Animal[] = data;
const ITEMS_PER_PAGE = 8;

// Clés pour le stockage
const STORAGE_KEYS = {
  ANIMAL_TYPE: "research_animal_type",
  LOCATION: "research_location",
  CURRENT_PAGE: "research_current_page",
};

// Fonction helper pour récupérer depuis le stockage
function getFromStorage(key: string, defaultValue: string | number) {
  try {
    const stored = localStorage.getItem(key);
    return stored !== null ? (typeof defaultValue === "number" ? Number(stored) : stored) : defaultValue;
  } catch {
    return defaultValue;
  }
}

// Fonction helper pour sauvegarder dans le stockage
function saveToStorage(key: string, value: string | number) {
  try {
    localStorage.setItem(key, String(value));
  } catch {
    // Silencieusement ignorer les erreurs de stockage
  }
}

export function useAnimalSearch() {
  const [searchParams] = useSearchParams();

  // Priorité : URL params > localStorage > valeur par défaut
  const typeParam = searchParams.get("type") || 
    getFromStorage(STORAGE_KEYS.ANIMAL_TYPE, "Tous les animaux") as string;
  const locationParam = searchParams.get("location") || 
    getFromStorage(STORAGE_KEYS.LOCATION, "") as string;

  const [animalType, setAnimalType] = useState(typeParam);
  const [location, setLocation] = useState(locationParam);
  const [currentPage, setCurrentPage] = useState(() => 
    getFromStorage(STORAGE_KEYS.CURRENT_PAGE, 1) as number
  );

  // Sauvegarder dans localStorage à chaque changement
  useEffect(() => {
    saveToStorage(STORAGE_KEYS.ANIMAL_TYPE, animalType);
  }, [animalType]);

  useEffect(() => {
    saveToStorage(STORAGE_KEYS.LOCATION, location);
  }, [location]);

  useEffect(() => {
    saveToStorage(STORAGE_KEYS.CURRENT_PAGE, currentPage);
  }, [currentPage]);

  // Filtrer les animaux
  const filteredAnimals = useMemo(() => {
    return animals.filter((animal) => {
      const matchesType =
        animalType === "Tous les animaux" || animal.type === animalType;
      const matchesLocation =
        !location || animal.city.toLowerCase().includes(location.toLowerCase());
      return matchesType && matchesLocation;
    });
  }, [animalType, location]);

  // Calculer le nombre total de pages
  const totalPages = Math.ceil(filteredAnimals.length / ITEMS_PER_PAGE);

  // Handler pour la recherche
  const handleSearch = (type: string, loc: string) => {
    setAnimalType(type);
    setLocation(loc);
    setCurrentPage(1);
  };

  // Handler pour réinitialiser les filtres
  const resetFilters = () => {
    setAnimalType("Tous les animaux");
    setLocation("");
    setCurrentPage(1);
    // Nettoyer le localStorage
    try {
      localStorage.removeItem(STORAGE_KEYS.ANIMAL_TYPE);
      localStorage.removeItem(STORAGE_KEYS.LOCATION);
      localStorage.removeItem(STORAGE_KEYS.CURRENT_PAGE);
    } catch {
      // Ignorer les erreurs
    }
  };

  // Handler pour changer de page
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return {
    filteredAnimals,
    currentPage,
    totalPages,
    handleSearch,
    resetFilters,
    handlePageChange,
  };
}