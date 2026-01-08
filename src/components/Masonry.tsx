import data from "../data/data.json";
import type { Animal } from "../types/Animal";

const animals: Animal[] = data;

export default function Masonry() {
  return (
    <div className="inner">
      {animals.map((animal) => (
        <div className="box" key={animal.id}>
          <img
            src={animal.imageUrl}
            alt={`Photo de ${animal.name}`}
            className="w-full h-auto object-cover"
          />
        </div>
      ))}
    </div>
  );
}
