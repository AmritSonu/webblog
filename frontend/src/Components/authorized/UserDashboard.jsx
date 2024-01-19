// UserDashboard.js
// import axios from "axios";

const UserDashboard = () => {
  return (
    <div className="container mx-auto flex">
      {/* Sidebar */}
      <div className="w-1/4 bg-gray-200 p-4">
        {/* Sidebar content */}
        <h2 className="text-xl font-semibold mb-4">Blog User Panel</h2>
        {/* Add other sidebar content and adjustments as needed */}
        <h4>My Post</h4>
      </div>

      {/* Main Content */}
      <div className="w-3/4 p-4">
        {/* User Panel */}
        <div className="bg-white rounded-lg p-6 mb-4 shadow-md">
          <img
            src=""
            alt="user"
            className="w-16 h-16 rounded-full mx-auto mb-4 shadow-lg"
          />
          <div className="text-center">
            <h2 className="text-xl font-semibold mb-2">User Name</h2>
            <p className="text-gray-600 mb-4">user@example.com</p>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Edit Profile
            </button>
          </div>
        </div>

        {/* Blog Content */}
        <div className="flex flex-col">
          {/* Blog List */}
          {/* Adjustments for blog content, S.No, blog title, edit, delete buttons */}
        </div>
      </div>
    </div>
  );
};

export { UserDashboard };
