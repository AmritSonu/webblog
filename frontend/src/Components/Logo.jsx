import { Link, useNavigate } from "react-router-dom";

export function Logo() {
  const navigate = useNavigate();
  function handleLogo() {
    navigate("/");
  }
  return (
    <>
      <h1
        className="text-3xl font-bold hover:cursor-pointer tMobile:text-xl"
        onClick={handleLogo}
      >
        <Link to="/">Web🅱️</Link>
      </h1>
    </>
  );
}
