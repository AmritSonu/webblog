import { NavLink } from "react-router-dom";

export function CategoryPost() {
  return (
    <div className="bg-white text-gray-700 font-bold mr-auto ml-auto mt-5 mb-5 flex items-center py-2 sm:justify-around  sMobile:text-sm justify-between w-4/5 md:w-7/12">
      <NavLink
        className={({ isActive }) =>
          isActive
            ? "text-mainColor-400 font-extrabold"
            : "hover:cursor-pointer"
        }
        to="/category/Frontend"
      >
        Frontend
      </NavLink>
      <NavLink
        to="/category/Backend"
        className={({ isActive }) =>
          isActive ? "text-mainColor-400 font-bold" : "hover:cursor-pointer"
        }
      >
        Backend
      </NavLink>
      <NavLink
        to="/category/Database"
        className={({ isActive }) =>
          isActive ? "text-mainColor-400 font-bold" : "hover:cursor-pointer"
        }
      >
        Database
      </NavLink>
      <NavLink
        to="/category/Other"
        className={({ isActive }) =>
          isActive ? "text-mainColor-400 font-bold" : "hover:cursor-pointer"
        }
      >
        Other
      </NavLink>
    </div>
  );
}
