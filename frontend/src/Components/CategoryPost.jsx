import { Link } from "react-router-dom";

export function CategoryPost() {
  return (
    <div className="bg-white w-7/12 mr-auto ml-auto mt-5 mb-5 flex items-center justify-around font-mono font-bold p-2 ">
      <Link to="/blog/frontend/" className="hover:cursor-pointer">
        Frontend
      </Link>
      <Link to="/blog/backend/" className="hover:cursor-pointer">
        Backend
      </Link>
      <Link to="/blog/database/" className="hover:cursor-pointer">
        Database
      </Link>
      <Link to="/blog/other/" className="hover:cursor-pointer">
        Other
      </Link>
    </div>
  );
}
