import Button from "./Button";
import { Link } from "react-router-dom";
import { FiHome } from "react-icons/fi";
import { LuBone } from "react-icons/lu";
import { LuFish } from "react-icons/lu";
import { LuSquirrel } from "react-icons/lu";
export default function NavBar() {
  return (
    <nav className="navbare bg-primary flex gap-y-10 justify-between py-1">
      <div className="logo scale-50 flex justify-start">
        <Link to="/">
          <img src="images/icon_navbare.png" alt="Logo" />
        </Link>
      </div>
      <div className="style-navbare flex gap-x-6 items-center ">
        <div className="style-links flex items-center justify-center gap-x-6 pr-80 font-bold text-xl">
          <Link to="/home" className="home flex items-center ">
            <FiHome className="mr-2 p-0.001 text-2xl " />
            Accueil
          </Link>
          <Link to="/research" className="adopte flex items-center">
            <LuBone className="mr-3 p-0.001 text-2xl " />
            J'adopte
          </Link>
          <Link to="" className="guide flex items-center">
            <LuFish className="mr-2 p-0.001 text-2xl " />
            Guide d'adoption
          </Link>
          <Link to="/volontariat" className="benevole flex items-center">
            <LuSquirrel className="mr-2 p-0.001 text-2xl " />
            Devenir benevole
          </Link>
        </div>
        <Button variant="secondary" size="lg" className="btnDon mr-6">
          Faire un don 🫶
        </Button>
      </div>
    </nav>
  );
}
