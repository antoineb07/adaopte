import Button from "./Button";
import { Link } from "react-router-dom";
import { FiHome } from "react-icons/fi";
import { LuBone } from "react-icons/lu";
import { LuFish } from "react-icons/lu";
import { LuSquirrel } from "react-icons/lu";
export default function NavBar() {
  return (
    <nav className="bg-primary flex gap-y-10 justify-between py-1">
      <div className="scale-50 flex justify-start">
        <h1 className="text-2xl md:text-7xl font-bold">
          🐾 Ada<span className="text-btn-secondary">opte</span>
        </h1>
      </div>
      <div className="flex gap-x-6 items-center ">
        <div className="flex items-center justify-center gap-x-6 pr-80 font-bold text-xs md:text-xl">
          <Link to="/home" className="flex items-center ">
            <FiHome className="mr-2 p-0.001 text-s md:text-2xl " />
            Accueil
          </Link>
          <Link to="/research" className="flex items-center">
            <LuBone className="mr-2 p-0.001 text-s md:text-2xl" />
            J'adopte
          </Link>
          <Link to="" className="flex items-center">
            <LuFish className="mr-2 p-0.001 text-s md:text-2xl" />
            Guide d'adoption
          </Link>
          <Link to="/volunteering" className="flex items-center">
            <LuSquirrel className="mr-2 p-0.001 text-s md:text-2xl" />
            Devenir bénévole
          </Link>
        </div>
        <Button variant="secondary" size="lg" className="btnDon mr-6">
          Faire un don 🫶
        </Button>
      </div>
    </nav>
  );
}
