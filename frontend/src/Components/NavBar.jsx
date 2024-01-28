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
      <div className="flex items-center p-3 md:justify-evenly lg:text-base tMobile:text-sm  sMobile: justify-between ">
        <Logo />
        <div className="flex justify-around w-3/12 font-semibold ">
          <NavLink
            className={({ isActive }) => (isActive ? "text-mainColor-400 mr-4" : " mr-4")}
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
              ? "font-semibold bg-mainColor-400 text-white p-1 pr-4 pl-4"
              : "font-bold bg-mainColor-400 text-white p-1 px-4"
          }
          onClick={handleLogout}
        >
          {token ? "Logout" : "Login"}
        </NavLink>
      </div>
    </>
  );
}
