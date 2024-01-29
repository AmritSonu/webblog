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
        <Link to="/">Web
        <span className="bg-mainColor-400 px-3 m-1 text-white">B</span>
        </Link>
      </h1>
    </>
  );
}
