import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";
import Cookies from "universal-cookie";
const cookies = new Cookies();

export function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [login, setLogin] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // set configurations
    const configuration = {
      method: "post",
      url: "blogposts/users/login",
      data: {
        email,
        password,
      },
    };
    axios(configuration)
      .then((user) => {
        setLogin(true);
        // set the cookie
        cookies.set("TOKEN", user.data.token, {
          path: "/",
        });
        // redirect user to the auth page
        window.location.href = "/dashboard";
      })

      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="flex justify-center items-center mt-7 mb-7">
      <div className="max-w-md relative flex flex-col p-4 rounded-md text-black bg-white">
        <div className="text-2xl font-bold mb-2 text-[#1e0e4b] text-center">
          Welcome back to <span className="text-mainColor-400">App</span>
        </div>
        <div className="text-sm font-normal mb-4 text-center text-[#1F2937]">
          Log in to your account
        </div>

        <form className="flex flex-col gap-3" onSubmit={handleSubmit}>
          <div className="block relative">
            <label
              htmlFor="email"
              className="block text-gray-600 cursor-text text-sm leading-[140%] mb-2 font-bold"
            >
              Email
            </label>
            <input
              type="email"
              name="email"
              onChange={(e) => setEmail(e.target.value)}
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
              type="password"
              name="password"
              onChange={(e) => setPassword(e.target.value)}
              className="rounded border border-gray-200 text-sm w-full font-normal leading-[18px] text-black tracking-[0px] appearance-none block h-11 m-0 p-[11px] focus:ring-2 ring-offset-2 ring-gray-900 focus:outline-none"
            />
          </div>
          <div>
            <a className="text-sm text-mainColor-400" href="#">
              Forgot your password?
            </a>
          </div>

          <div className="mt-3 mb-3">
            {/* display success message */}
            {login ? (
              <p className="text-green-500 font-mono">
                You Are Login Successfully
              </p>
            ) : (
              <p className="text-red-700 font-mono">You Have not Login</p>
            )}
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
