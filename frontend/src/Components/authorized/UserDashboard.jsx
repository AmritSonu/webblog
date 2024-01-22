// UserDashboard.js
// import axios from "axios";

import { NavLink } from "react-router-dom";

const UserDashboard = () => {
  return (
    <div className="container mx-auto flex">
      {/* Sidebar */}
      <div className="w-1/5 bg-gray-800 p-4">
        {/* Sidebar content */}
        <h2 className="text-xl font-semibold mb-4 text-white">
          Blog User Panel
        </h2>
        {/* Add other sidebar content and adjustments as needed */}
        <h3 className="font-medium text-gray-950 bg-slate-50 rounded-md mt-40 pt-6 pb-6 pl-10 text-lg">
          My All Blog Posts
        </h3>
      </div>
      {/* Main Content */}
      <div className="w-3/4 p-4">
        {/* User Panel */}
        <div className="bg-white rounded-lg p-6 mb-4 shadow-md">
          <img
            src="https://picsum.photos/200/200?random="
            alt="user"
            className="w-16 h-16 rounded-full mx-auto mb-4 shadow-lg"
          />
          <div className="text-center">
            <h2 className="text-xl font-semibold mb-2">Amritpal Singh</h2>
            <p className="text-gray-600 mb-4">user@534</p>
            <button className="bg-mainColor-400 text-white font-bold py-2 px-4 rounded hover:bg-mainLightcolor-300">
              Edit Profile
            </button>
          </div>
        </div>

        {/* Blog Content */}
        <div className="flex flex-col bg-blend-overlay">
          {/* Blog List */}

          <h1 className="font-serif text-2xl">Blog List</h1>
          <span className="font-bold">3 blogs</span>
          <NavLink
            className="bg-mainLightcolor-300 text-white w-24 font-bold rounded-sm m-1 mt-5 p-1 pl-3"
            to="/dashboard/writeBlogPost"
          >
            Add New
          </NavLink>
          <div className="shadow-sm">
            <ul className="flex justify-center p-1 gap-28  font-mono bg-gray-800 text-white">
              <li>Title</li>
              <li>Category</li>
              <li>Created At</li>
              <li>Edit</li>
              <li>Delete</li>
            </ul>
            {/* User's blog data */}

            <ul className="flex justify-start p-1 gap-32">
              <li>What is React JS?</li>
              <li>Frontend</li>
              <li>4:30 am </li>
              <li className="hover:cursor-pointer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-5 h-5"
                >
                  <path d="m5.433 13.917 1.262-3.155A4 4 0 0 1 7.58 9.42l6.92-6.918a2.121 2.121 0 0 1 3 3l-6.92 6.918c-.383.383-.84.685-1.343.886l-3.154 1.262a.5.5 0 0 1-.65-.65Z" />
                  <path d="M3.5 5.75c0-.69.56-1.25 1.25-1.25H10A.75.75 0 0 0 10 3H4.75A2.75 2.75 0 0 0 2 5.75v9.5A2.75 2.75 0 0 0 4.75 18h9.5A2.75 2.75 0 0 0 17 15.25V10a.75.75 0 0 0-1.5 0v5.25c0 .69-.56 1.25-1.25 1.25h-9.5c-.69 0-1.25-.56-1.25-1.25v-9.5Z" />
                </svg>
              </li>
              <li className="hover:cursor-pointer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M8.75 1A2.75 2.75 0 0 0 6 3.75v.443c-.795.077-1.584.176-2.365.298a.75.75 0 1 0 .23 1.482l.149-.022.841 10.518A2.75 2.75 0 0 0 7.596 19h4.807a2.75 2.75 0 0 0 2.742-2.53l.841-10.52.149.023a.75.75 0 0 0 .23-1.482A41.03 41.03 0 0 0 14 4.193V3.75A2.75 2.75 0 0 0 11.25 1h-2.5ZM10 4c.84 0 1.673.025 2.5.075V3.75c0-.69-.56-1.25-1.25-1.25h-2.5c-.69 0-1.25.56-1.25 1.25v.325C8.327 4.025 9.16 4 10 4ZM8.58 7.72a.75.75 0 0 0-1.5.06l.3 7.5a.75.75 0 1 0 1.5-.06l-.3-7.5Zm4.34.06a.75.75 0 1 0-1.5-.06l-.3 7.5a.75.75 0 1 0 1.5.06l.3-7.5Z"
                    clipRule="evenodd"
                  />
                </svg>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export { UserDashboard };

// <ul className="flex justify-start p-1 gap-32">
// <li>What is Frontend!</li>
// <li>Frontend</li>
// <li>4:30 am </li>
// <li className="hover:cursor-pointer">
//   <svg
//     xmlns="http://www.w3.org/2000/svg"
//     viewBox="0 0 20 20"
//     fill="currentColor"
//     className="w-5 h-5"
//   >
//     <path d="m5.433 13.917 1.262-3.155A4 4 0 0 1 7.58 9.42l6.92-6.918a2.121 2.121 0 0 1 3 3l-6.92 6.918c-.383.383-.84.685-1.343.886l-3.154 1.262a.5.5 0 0 1-.65-.65Z" />
//     <path d="M3.5 5.75c0-.69.56-1.25 1.25-1.25H10A.75.75 0 0 0 10 3H4.75A2.75 2.75 0 0 0 2 5.75v9.5A2.75 2.75 0 0 0 4.75 18h9.5A2.75 2.75 0 0 0 17 15.25V10a.75.75 0 0 0-1.5 0v5.25c0 .69-.56 1.25-1.25 1.25h-9.5c-.69 0-1.25-.56-1.25-1.25v-9.5Z" />
//   </svg>
// </li>
// <li className="hover:cursor-pointer">
//   <svg
//     xmlns="http://www.w3.org/2000/svg"
//     viewBox="0 0 20 20"
//     fill="currentColor"
//     className="w-5 h-5"
//   >
//     <path
//       fillRule="evenodd"
//       d="M8.75 1A2.75 2.75 0 0 0 6 3.75v.443c-.795.077-1.584.176-2.365.298a.75.75 0 1 0 .23 1.482l.149-.022.841 10.518A2.75 2.75 0 0 0 7.596 19h4.807a2.75 2.75 0 0 0 2.742-2.53l.841-10.52.149.023a.75.75 0 0 0 .23-1.482A41.03 41.03 0 0 0 14 4.193V3.75A2.75 2.75 0 0 0 11.25 1h-2.5ZM10 4c.84 0 1.673.025 2.5.075V3.75c0-.69-.56-1.25-1.25-1.25h-2.5c-.69 0-1.25.56-1.25 1.25v.325C8.327 4.025 9.16 4 10 4ZM8.58 7.72a.75.75 0 0 0-1.5.06l.3 7.5a.75.75 0 1 0 1.5-.06l-.3-7.5Zm4.34.06a.75.75 0 1 0-1.5-.06l-.3 7.5a.75.75 0 1 0 1.5.06l.3-7.5Z"
//       clipRule="evenodd"
//     />
//   </svg>
// </li>
// </ul>
