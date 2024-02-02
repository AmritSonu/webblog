import { useState } from "react";
import axios from "axios";
import PropTypes from "prop-types";
import Cookies from "universal-cookie";
const cookies = new Cookies();
const EditProfile = ({ userData, onSave }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [image, setImage] = useState("");
  const [editedUserData, setEditedUserData] = useState({
    firstname: "",
    lastname: "",
    email: "",
  });
  let inputValues = editedUserData;
  const authToken = cookies.get("TOKEN");
  const tokenData = authToken
    ? JSON.parse(atob(authToken.split(".")[1]))
    : null;

  const handleEditClick = () => {
    if (isEditing) {
      const formData = new FormData();
      onSave(editedUserData);
      if (image) {
        formData.append("avtar", image);
        axios
          .post(`/blogposts/userImage/${tokenData.userId}`, formData)
          .then((res) => {
            console.log(res);
          })
          .catch((error) => {
            console.error("Image upload failed", error);
          });
      }
    }

    setIsEditing(!isEditing);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedUserData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };
  return (
    <div className="border flex flex-col items-center p-4">
      <div className="mb-4">
        {isEditing ? (
          <label htmlFor="avtarUrl" className="relative">
            <input
              type="file"
              id="avtarUrl"
              name="avtarUrl"
              onChange={handleImageChange}
              className="hidden"
            />
            <div className="w-24 h-24 rounded-full overflow-hidden bg-gray-300 cursor-pointer">
              {editedUserData.avtarUrl || userData.avtarUrl ? (
                <img
                  src={editedUserData.avtarUrl || userData.avtarUrl}
                  alt="Profile"
                  className="w-full h-full object-cover hover:opacity-35 transition-opacity duration-300"
                />
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="w-12 h-12 mx-auto mt-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 6s2-3.999 2-4a2 2 0 10-4 0s2 2.001 2 4c0 .001-2 3.999-2 4a2 2 0 004 0z"
                  ></path>
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 16s6-2 8-2 4 2 8 2"
                  ></path>
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 16s6 2 8 2 4-2 8-2"
                  ></path>
                </svg>
              )}
            </div>
          </label>
        ) : (
          <img
            src={editedUserData.avtarUrl || userData.avtarUrl}
            alt="Profile"
            className="w-24 h-24 rounded-full"
          />
        )}
      </div>
      <div className="flex mb-2 tMobile:flex-col gap-2">
        {isEditing ? (
          <>
            <input
              type="text"
              id="firstname"
              name="firstname"
              className="border sm:mr-2 py-1"
              placeholder="First Name"
              value={inputValues.firstname}
              onChange={handleInputChange}
            />
            <input
              type="text"
              id="lastname"
              name="lastname"
              className="border py-1 "
              value={editedUserData.lastname}
              placeholder="Last Name"
              onChange={handleInputChange}
            />
          </>
        ) : (
          <h1 className="text-xl font-serif">{`${userData.firstname} ${userData.lastname}`}</h1>
        )}
      </div>
      <div className="mb-4">
        {isEditing ? (
          <input
            type="text"
            id="email"
            name="email"
            className="border py-1"
            placeholder="Email"
            value={editedUserData.email}
            onChange={handleInputChange}
          />
        ) : (
          <span className="text-sm font-serif">{userData.email}</span>
        )}
      </div>
      <button
        onClick={handleEditClick}
        className="bg-mainColor-400 text-white p-1.5 mb-2 font-bold text-sm"
      >
        {isEditing ? "Done" : "Edit Profile"}
      </button>
    </div>
  );
};

EditProfile.propTypes = {
  userData: PropTypes.shape({
    firstname: PropTypes.string,
    lastname: PropTypes.string,
    email: PropTypes.string,
    avtarUrl: PropTypes.string,
  }),
  onSave: PropTypes.func.isRequired,
};

export { EditProfile };
