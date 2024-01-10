import { Link } from "react-router-dom";

export function Register() {
  return (
    <div className="flex items-center justify-center mt-6 mb-6">
      <div className="w-full max-w-md rounded-lg p-6">
        <h2 className="text-2xl font-bold text-mainColor-400 mb-4">Sign Up</h2>
        <form className="flex flex-col">
          <div className="flex space-x-4 mb-4">
            <input
              placeholder="First Name"
              className=" border-2 rounded-md p-2 w-1/2 focus:outline-none"
              type="text"focus:outline-none
            />
            <input
              placeholder="Last Name"
              className="border-2 rounded-md p-2 w-1/2 focus:outline-none"
              type="text"
            />
          </div>
          <input
            placeholder="Email"
            className=" border-2 rounded-md p-2 mb-4 focus:outline-none "
            type="email"
          />
          <input
            placeholder="Password"
            className=" border-2 rounded-md p-2 mb-4 focus:outline-none "
            type="password"
          />
          <input
            placeholder="Confirm Password"
            className=" border-2 rounded-md p-2 mb-4 focus:outline-none"
            type="password"
          />
          {/* ... rest of the form fields ... */}
          <p className=" mt-4">
            Already have an account?
            <Link
              to="/login"
              className="text-sm text-blue-500 ml-2 hover:underline"
            >
              Login
            </Link>
          </p>
          <button
            className="bg-mainColor-400 text-white font-bold py-2 px-4 rounded-md mt-4 hover:bg-indigo-600 hover:to-blue-600 transition ease-in-out duration-150"
            type="submit"
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
}
