import data from "../data/data.json";
import type { Animal } from "../types/Animal";
import Button from "./Button";
import { Link } from "react-router-dom";

const animals: Animal[] = data;

export default function Masonry() {
  return (
    <div className="flex flex-col items-center justify-center p-8 bg-primary">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="space-y-4">
          <div className="md:w-80 md:h-150 overflow-hidden rounded-lg">
            <img
              src={animals[0].imageUrl}
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
          <div className="md:w-80 md:h-80 overflow-hidden rounded-lg">
            <img
              src={animals[1].imageUrl}
              alt="{animals[1].name}"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <div className="space-y-4">
          <div className="md:w-80 md:h-80 overflow-hidden rounded-lg">
            <img
              src={animals[2].imageUrl}
              alt="{animals[2].name}"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="md:w-80 h-63 md:h-150 overflow-hidden rounded-lg">
            <img
              src={animals[3].imageUrl}
              alt="{animals[3].name}"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <div className="space-y-4">
          <div className="md:w-80 md:h-150 overflow-hidden rounded-lg">
            <img
              src={animals[4].imageUrl}
              alt="{animals[4].name}"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="md:w-80 md:h-80 overflow-hidden rounded-lg">
            <img
              src={animals[5].imageUrl}
              alt="{animals[5].name}"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <div className="space-y-4">
          <div className="h-30 md:w-80 md:h-80 overflow-hidden rounded-lg">
            <img
              src={animals[6].imageUrl}
              alt="{animals[6].name}"
              className="w-full h-full object-cover"
            />
          </div>
          <div className=" md:w-80 md:h-150 overflow-hidden rounded-lg">
            <img
              src={animals[7].imageUrl}
              alt="{animals[7].name}"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      <div className="mt-8">
        <Link to="/research">
          <Button variant="primary">Voir tous les animaux</Button>
        </Link>
      </div>
    </div>
  );
}
