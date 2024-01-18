import PropTypes from "prop-types";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "universal-cookie";
import { logout } from "./Components/authorized/authUtils";

const cookies = new Cookies();

function ProtectedRoutes(props) {
  const navigate = useNavigate();
  const { Component } = props;

  useEffect(() => {
    // Check if the token is present in cookies
    const token = cookies.get("TOKEN");

    if (!token) {
      // Redirect to the login page if the token is not present
      navigate("/login");
    }
  }, [navigate]);

  const handleLogout = () => {
    // Call the logout function to clear authentication information
    logout();

    // Redirect to the login page after logout
    navigate("/login");
  };
  return (
    <div>
      {/* Display the logout button */}
      <button onClick={handleLogout}>Logout</button>
      <Component />
    </div>
  );
}

ProtectedRoutes.propTypes = {
  Component: PropTypes.func,
};

export { ProtectedRoutes };
