import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";

const Register = () => {
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [register, setRegister] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Assuming you have a server endpoint for registration
    // set configurations
    const configuration = {
      method: "post",
      url: "https://webblog-blond.vercel.app/blogposts/users",
      data: {
        firstname,
        lastname,
        email,
        password,
      },
    };
    axios(configuration)
      .then(() => {
        setRegister(true);
      })
      .catch((error) => {
        console.log(error);
      });

    if (firstname && lastname && email && password) {
      // Successful registration logic, such as redirecting to another page
      console.log("Registration successful");
    } else {
      // Handle registration error, show an error message, etc.
      console.error("Registration failed");
    }
  };

  return (
    <div className="flex items-center justify-center mt-6 mb-6 ">
      <div className="w-full max-w-md rounded-lg p-6">
        <h2 className="text-2xl font-bold text-mainColor-400 mb-4">Sign Up</h2>
        <form className="flex flex-col " onSubmit={handleSubmit}>
          <div className="flex space-x-4 mb-4">
            <input
              placeholder="FirstName"
              name="firstname"
              className="border-2 rounded-md p-2 w-1/2 focus:outline-none  mobile:placeholder:text-sm"
              type="text"
              value={firstname}
              onChange={(e) => setFirstName(e.target.value)}
            />
            <input
              placeholder="Last Name"
              name="lastname"
              className="border-2 rounded-md p-2 w-1/2 focus:outline-none  mobile:placeholder:text-sm"
              type="text"
              value={lastname}
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>
          <input
            placeholder="Email"
            name="email"
            className="border-2 rounded-md p-2 mb-4 focus:outline-none  mobile:placeholder:text-sm"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            placeholder="Password"
            name="password"
            className="border-2 rounded-md p-2 mb-4 focus:outline-none  mobile:placeholder:text-sm"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <div className="mt-3 mb-3">
            {/* display success message */}
            {register ? (
              <p className="text-green-500 font-mono">
                You Are Registered Successfully
              </p>
            ) : (
              <p className="text-red-700 font-mono ">You Have not Registered yet :(</p>
            )}
          </div>
          <p className="mt-4 font-semibold">
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
};

export { Register };
