import type { Animal } from "../types/Animal";
import Button from "./Button";

type AnimalCardProps = {
  animal: Animal;
};

export default function AnimalCard({ animal }: AnimalCardProps) {
  const handleClick = () => {
    console.log(`${animal.name} - ${animal.breed}`);
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow flex flex-col h-full">
      <div className="h-64 overflow-hidden shrink-0">
        <img 
          src={animal.imageUrl} 
          alt={animal.name}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="p-5 flex flex-col flex-1">
        <div className="text-sm text-deep-grey mb-1">{animal.type}</div>
        <h3 className="text-xl font-bold text-accent mb-2">{animal.name}</h3>
        <p className="text-sm text-dark mb-1">{animal.breed} · {animal.age}</p>
        <p className="text-sm text-deep-grey mb-3">{animal.city}</p>
        <p className="text-sm text-dark mb-4 flex-1">
          {animal.description}
        </p>
        <div className="flex justify-center mt-auto">
          <Button 
            onClick={handleClick} 
            variant="primary" 
            size="md"
          >
            Rencontrer
          </Button>
        </div>
      </div>
    </div>
  );
}