import axios from "axios";
import { useEffect, useState } from "react";
import Cookies from "universal-cookie";
import { EditProfile } from "./EditProfile";
const cookies = new Cookies();

function UserProfile() {
  const [userData, setUserData] = useState({});
  const [rerender, setRerender] = useState(false);
  const authToken = cookies.get("TOKEN");
  const tokenData = authToken
    ? JSON.parse(atob(authToken.split(".")[1]))
    : null;
  const putUserProfile = async (editedUserData) => {
    try {
      await axios.put(`blogposts/users/${tokenData.userId}`, editedUserData);
      setRerender(!rerender);
    } catch (error) {
      console.error("Request Error:", error.message);
    }
    console.table(editedUserData);
  };

  useEffect(() => {
    const handleSaveProfile = async () => {
      if (!tokenData) return;
      try {
        const response = await axios.get(`blogposts/users/${tokenData.userId}`);
        setUserData(response.data.user);
      } catch (error) {
        console.error("Request Error:", error.message);
      }
    };
    handleSaveProfile();
  }, [rerender, tokenData]);
  return (
    <>
      <EditProfile userData={userData} onSave={putUserProfile} />
    </>
  );
}
export { UserProfile };
