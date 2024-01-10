import { Link } from "react-router-dom";

export function Login() {
  return (
    <div className="flex justify-center items-center mt-7 mb-7">
      <div className="max-w-md relative flex flex-col p-4 rounded-md text-black bg-white">
        <div className="text-2xl font-bold mb-2 text-[#1e0e4b] text-center">
          Welcome back to <span className="text-mainColor-400">App</span>
        </div>
        <div className="text-sm font-normal mb-4 text-center text-[#1F2937]">
          Log in to your account
        </div>
        <form className="flex flex-col gap-3">
          <div className="block relative">
            <label
              htmlFor="email"
              className="block text-gray-600 cursor-text text-sm leading-[140%] mb-2 font-bold"
            >
              Email
            </label>
            <input
              type="text"
              id="email"
              className="rounded border border-gray-200 text-sm w-full font-normal leading-[18px] text-black tracking-[0px] appearance-none block h-11 m-0 p-[11px] focus:ring-2 ring-offset-2  ring-gray-900 outline-0 focus:outline-none"
            />
          </div>
          <div className="block relative">
            <label
              htmlFor="password"
              className="block text-gray-600 cursor-text text-sm leading-[140%] font-bold mb-2"
            >
              Password
            </label>
            <input
              type="text"
              id="password"
              className="rounded border border-gray-200 text-sm w-full font-normal leading-[18px] text-black tracking-[0px] appearance-none block h-11 m-0 p-[11px] focus:ring-2 ring-offset-2 ring-gray-900 focus:outline-none"
            />
          </div>
          <div>
            <a className="text-sm text-mainColor-400" href="#">
              Forgot your password?
            </a>
          </div>
          <button
            type="submit"
            className="bg-mainColor-400 w-max m-auto px-6 py-2 rounded text-white text-sm font-normal"
          >
            Submit
          </button>
        </form>
        <div className="text-sm text-center mt-[1.6rem]">
          Do not have an account yet?
          <Link className="text-sm text-mainColor-400" to="/register">
            Sign up for free!
          </Link>
        </div>
      </div>
    </div>
  );
}
