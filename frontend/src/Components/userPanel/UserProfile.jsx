import axios from "axios";
import { useEffect, useState } from "react";
import Cookies from "universal-cookie";
const cookies = new Cookies();

function UserProfile() {
  const [userData, setUserData] = useState(null);
  const authToken = cookies.get("TOKEN");
  const tokenData = authToken
    ? JSON.parse(atob(authToken.split(".")[1]))
    : null;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`blogposts/users/${tokenData.userId}`);
        setUserData(response.data.user);
      } catch (error) {
        console.error("Request Error:", error.message);
      }
    };
    fetchData();
  });

  return (
    <div className="bg-white rounded-lg p-6 mb-4 shadow-md">
      {userData ? (
        <>
          <img
            src="https://picsum.photos/200/200?random="
            alt="user"
            className="w-16 h-16 rounded-full mx-auto mb-4 shadow-lg"
          />
          <div className="text-center">
            <h2 className="text-xl font-semibold mb-2">
              {userData.firstname + " " + userData.lastname}
            </h2>
            <p className="text-gray-600 mb-4"> {userData.email}</p>
            <button className="bg-mainColor-400 text-white font-bold py-2 px-4 rounded hover:bg-mainLightcolor-300">
              Edit Profile
            </button>
          </div>
        </>
      ) : (
        <p>Loading user data...</p>
      )}
    </div>
  );
}

export { UserProfile };
