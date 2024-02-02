import axios from "axios";
import { useEffect, useState } from "react";
import Cookies from "universal-cookie";
import { EditProfile } from "./EditProfile";
const cookies = new Cookies();

function UserProfile() {
  const [userData, setUserData] = useState({});
  const [loading, setLoading] = useState(true);
  const authToken = cookies.get("TOKEN");

  const tokenData = authToken
    ? JSON.parse(atob(authToken.split(".")[1]))
    : null;
  const putUserProfile = async (editedUserData) => {
    try {
      setLoading(true);
      await axios.put(`blogposts/users/${tokenData.userId}`, editedUserData);
    } catch (error) {
      console.error("Request Error:", error.message);
    } finally {
      setTimeout(() => {
        setLoading(false);
      }, 500);
    }
  };
  useEffect(() => {
    const handleSaveProfile = async () => {
      if (!tokenData) return;
      try {
        const response = await axios.get(`blogposts/users/${tokenData.userId}`);
        setUserData(response.data.user);
      } catch (error) {
        console.error("Request Error:", error.message);
      } finally {
        setLoading(false);
      }
    };
    handleSaveProfile();
  }, [loading]);
  // console.log("redering...");
  return (
    <>
      {loading ? (
        <UserProfilePlaceHolder />
      ) : (
        <EditProfile userData={userData} onSave={putUserProfile} />
      )}
    </>
  );
}
function UserProfilePlaceHolder() {
  return (
    <div className="flex justify-center items-center">
      <div className="w-40 flex justify-center items-center flex-col gap-4 animate-pulse">
        <div className="h-24 w-24 rounded-full bg-slate-300"></div>
        <div className="mb-1 h-5 w-9/12 rounded-md bg-slate-300 text-lg "></div>
        <div className="h-5 w-9/12 rounded-md bg-slate-300 text-sm"></div>
        <div className="mt-1 h-8 w-6/12  bg-slate-300 text-sm"></div>
      </div>
    </div>
  );
}
export { UserProfile };
