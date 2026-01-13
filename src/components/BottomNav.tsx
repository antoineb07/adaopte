import { NavLink } from "react-router-dom";
import { FiHome } from "react-icons/fi";
import { LuBone, LuFish, LuSquirrel } from "react-icons/lu";

export default function BottomNav() {
  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t shadow md:hidden">
      <div className="flex justify-around items-center py-2 text-xs font-medium">
        <NavLink
          to="/home"
          className={({ isActive }) =>
            `flex flex-col items-center ${
              isActive ? "text-btn-secondary" : "text-gray-500"
            }`
          }
        >
          <FiHome className="text-2xl" />
          Accueil
        </NavLink>

        <NavLink
          to="/research"
          className={({ isActive }) =>
            `flex flex-col items-center ${
              isActive ? "text-btn-secondary" : "text-gray-500"
            }`
          }
        >
          <LuBone className="text-2xl" />
          J’adopte
        </NavLink>

        <NavLink
          to="/guide"
          className={({ isActive }) =>
            `flex flex-col items-center ${
              isActive ? "text-btn-secondary" : "text-gray-500"
            }`
          }
        >
          <LuFish className="text-2xl" />
          Guide
        </NavLink>

        <NavLink
          to="/volunteering"
          className={({ isActive }) =>
            `flex flex-col items-center ${
              isActive ? "text-btn-secondary" : "text-gray-500"
            }`
          }
        >
          <LuSquirrel className="text-2xl" />
          Bénévole
        </NavLink>
      </div>
    </nav>
  );
}
