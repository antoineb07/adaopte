import data from "../data/data.json";
import type { Animal } from "../types/Animal";
import Button from "./Button";

const animals: Animal[] = data;

export default function () {
  return (
    <div className="flex flex-col items-center justify-center p-8 bg-primary">
      <div className="grid grid-cols-4 bg-primary">
        <div className="shadow-lg m-10 pb-6">
          <div className="w-79 h-40 overflow-hidden">
            <img
              src={animals[0].imageUrl}
              alt="{animals[0].name}"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="p-6">
            <p>{animals[0].type}</p>
            <p>{animals[0].name}</p>
            <p>
              {animals[0].breed} - {animals[0].age}
            </p>
            <p>{animals[0].zipcode}</p>
            <p>{animals[0].description}</p>
          </div>
          <div className="p-4">
            <Button variant="primary">Rencontrer</Button>
          </div>
        </div>

        <div className="shadow-lg m-10 pb-6">
          <div className="w-79 h-40 overflow-hidden">
            <img
              src={animals[1].imageUrl}
              alt="{animals[1].name}"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="p-6">
            <p>{animals[1].type}</p>
            <p>{animals[1].name}</p>
            <p>
              {animals[1].breed} - {animals[1].age}
            </p>
            <p>{animals[1].zipcode}</p>
            <p>{animals[1].description}</p>
          </div>
          <div className="p-4">
            <Button variant="primary">Rencontrer</Button>
          </div>
        </div>

        <div className="shadow-lg m-10 pb-6">
          <div className="w-79 h-40 overflow-hidden ">
            <img
              src={animals[2].imageUrl}
              alt="{animals[1].name}"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="p-6">
            <p>{animals[2].type}</p>
            <p>{animals[2].name}</p>
            <p>
              {animals[2].breed} - {animals[1].age}
            </p>
            <p>{animals[2].zipcode}</p>
            <p>{animals[2].description}</p>
          </div>
          <div className="p-4">
            <Button variant="primary">Rencontrer</Button>
          </div>
        </div>

        <div className="shadow-lg m-10 pb-6">
          <div className="w-79 h-40 overflow-hidden ">
            <img
              src={animals[3].imageUrl}
              alt="{animals[3].name}"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="p-6">
            <p>{animals[3].type}</p>
            <p>{animals[3].name}</p>
            <p>
              {animals[3].breed} - {animals[3].age}
            </p>
            <p>{animals[3].zipcode}</p>
            <p>{animals[3].description}</p>
          </div>
          <div className="p-4">
            <Button variant="primary">Rencontrer</Button>
          </div>
        </div>

        <div className="shadow-lg m-10 pb-6">
          <div className="w-79 h-40 overflow-hidden ">
            <img
              src={animals[4].imageUrl}
              alt="{animals[4].name}"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="p-6">
            <p>{animals[4].type}</p>
            <p>{animals[4].name}</p>
            <p>
              {animals[4].breed} - {animals[4].age}
            </p>
            <p>{animals[4].zipcode}</p>
            <p>{animals[4].description}</p>
          </div>
          <div className="p-4">
            <Button variant="primary">Rencontrer</Button>
          </div>
        </div>

        <div className="shadow-lg m-10 pb-6">
          <div className="w-79 h-40 overflow-hidden ">
            <img
              src={animals[5].imageUrl}
              alt="{animals[5].name}"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="p-6">
            <p>{animals[5].type}</p>
            <p>{animals[5].name}</p>
            <p>
              {animals[5].breed} - {animals[5].age}
            </p>
            <p>{animals[5].zipcode}</p>
            <p>{animals[5].description}</p>
          </div>
          <div className="p-4">
            <Button variant="primary">Rencontrer</Button>
          </div>
        </div>

        <div className="shadow-lg m-10 pb-6">
          <div className="w-79 h-40 overflow-hidden ">
            <img
              src={animals[6].imageUrl}
              alt="{animals[6].name}"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="p-6">
            <p>{animals[6].type}</p>
            <p>{animals[6].name}</p>
            <p>
              {animals[6].breed} - {animals[6].age}
            </p>
            <p>{animals[6].zipcode}</p>
            <p>{animals[6].description}</p>
          </div>
          <div className="p-4">
            <Button variant="primary">Rencontrer</Button>
          </div>
        </div>

        <div className="shadow-lg m-10 pb-6">
          <div className="w-79 h-40 overflow-hidden ">
            <img
              src={animals[7].imageUrl}
              alt="{animals[7].name}"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="p-6">
            <p>{animals[7].type}</p>
            <p>{animals[7].name}</p>
            <p>
              {animals[7].breed} - {animals[7].age}
            </p>
            <p>{animals[7].zipcode}</p>
            <p>{animals[7].description}</p>
          </div>
          <div className="p-4">
            <Button variant="primary">Rencontrer</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
