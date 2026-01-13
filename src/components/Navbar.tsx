import Button from "./Button";
import { Link } from "react-router-dom";
import { FiHome } from "react-icons/fi";
import { LuBone } from "react-icons/lu";
import { LuFish } from "react-icons/lu";
import { LuSquirrel } from "react-icons/lu";


export default function NavBar() {
  return (
    <nav className="hidden md:block">
      <div className="flex justify-between items-center w-full p-6">
        <div>
          <h1 className="text-5xl font-bold">
            🐾 Ada<span className="text-btn-secondary">opte</span>
          </h1>
        </div>
        <div className=" flex-1 flex justify-center space-x-4 font-bold text-xl">
          <Link to="/home" className="flex items-center ">
            <FiHome className="mr-2 p-0.001 text-2xl " />
            Accueil
          </Link>
          <Link to="/research" className="flex items-center">
            <LuBone className="mr-3 p-0.001 text-2xl " />
            J'adopte
          </Link>
          <Link to="" className="flex items-center">
            <LuFish className="mr-2 p-0.001 text-2xl " />
            Guide d'adoption
          </Link>
          <Link to="/volunteering" className="flex items-center">
            <LuSquirrel className="mr-2 p-0.001 text-2xl " />
            Devenir bénévole
          </Link>
        </div>
        <div>
          <Button variant="secondary" size="lg" className="btnDon mr-6">
            Faire un don 🫶
          </Button>
        </div>
      </div>
    </nav>
  );
}
