import { NavLink } from "react-router-dom";

export function CategoryPost() {
  return (
    <div className="bg-white w-7/12 mr-auto ml-auto mt-5 mb-5 flex items-center justify-around p-2 ">
      <NavLink
        className={({ isActive }) =>
          isActive ? "text-mainColor-400 font-bold" : "hover:cursor-pointer"
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
