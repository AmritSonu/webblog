import { NavLink } from "react-router-dom";
import { Logo } from "./Logo";
export function Navbar() {
  return (
    <>
      <div className="flex justify-evenly items-center p-3">
        <Logo />
        <div className="flex justify-around w-3/12 font-semibold ">
          <NavLink
            className={({ isActive }) => (isActive ? "text-mainColor-400" : "")}
            to="/login"
          >
            login
          </NavLink>
          <NavLink
            className={({ isActive }) => (isActive ? "text-mainColor-400" : "")}
            to="/register"
          >
            register
          </NavLink>
        </div>
      </div>
    </>
  );
}
