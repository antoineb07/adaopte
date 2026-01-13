import type { Animal } from "../types/Animal";

type AnimalCardProps = {
  animal: Animal;
};

export default function AnimalCard({ animal }: AnimalCardProps) {
  const handleClick = () => {
    console.log(`${animal.name} - ${animal.breed}`);
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow">
      <div className="h-64 overflow-hidden">
        <img 
          src={animal.imageUrl} 
          alt={animal.name}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="p-5">
        <div className="text-sm text-deep-grey mb-1">{animal.type}</div>
        <h3 className="text-xl font-bold text-accent mb-2">{animal.name}</h3>
        <p className="text-sm text-dark mb-1">{animal.breed} · {animal.age}</p>
        <p className="text-sm text-deep-grey mb-3">{animal.city}</p>
        <p className="text-sm text-dark mb-4 line-clamp-3">{animal.description}</p>
        <button onClick={handleClick} className="w-full bg-dark text-white py-2 px-4 rounded-lg hover:bg-gray-700 transition-colors">
          Rencontrer
        </button>
      </div>
    </div>
  );
}