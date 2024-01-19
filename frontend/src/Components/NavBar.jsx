import { NavLink, useNavigate } from "react-router-dom";
import { Logo } from "./Logo";
import { logout } from "./authorized/authUtils";
import Cookies from "universal-cookie";
const cookies = new Cookies();
export function Navbar() {
  const navigate = useNavigate();
  const token = cookies.get("TOKEN");

  const handleLogout = () => {
    logout();
    navigate("/login");
  };
  return (
    <>
      <div className="flex justify-evenly items-center p-3">
        <Logo />
        <div className="flex justify-around w-3/12 font-semibold ">
          {/* <NavLink
            className={({ isActive }) => (isActive ? "text-mainColor-400" : "")}
            to="/login"
          >
            login
          </NavLink> */}
          <NavLink
            className={({ isActive }) => (isActive ? "text-mainColor-400" : "")}
            to="/register"
          >
            Register
          </NavLink>
          <NavLink
            className={({ isActive }) => (isActive ? "text-mainColor-400" : "")}
            to="/dashboard"
          >
            Dashboard
          </NavLink>
        </div>
        <NavLink
          to="/login"
          className={({ isActive }) =>
            isActive
              ? "font-semibold bg-mainColor-400 text-white rounded-lg p-1 pr-4 pl-4"
              : "font-bold bg-mainColor-400 text-white rounded-lg p-1 pr-4 pl-4"
          }
          onClick={handleLogout}
        >
          {token ? "Logout" : "Login"}
        </NavLink>
      </div>
    </>
  );
}
