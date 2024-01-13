import { Link } from "react-router-dom";
import { Logo } from "./Logo";
export function Navbar() {
  return (
    <>
      <div className="flex justify-evenly items-center p-3">
        <Logo />
        <div className="flex justify-around w-3/12 font-semibold ">
          <Link to="/login">login</Link>
          <Link to="/register">register</Link>
        </div>
      </div>
    </>
  );
}
