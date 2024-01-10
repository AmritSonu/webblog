import { Link } from "react-router-dom";

export function Logo() {
  return (
    <>
      <h1 className="text-3xl font-bold hover:cursor-pointer">
        <Link to="/">Web🅱️</Link>
      </h1>
    </>
  );
}
