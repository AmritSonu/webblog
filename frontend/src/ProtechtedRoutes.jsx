import PropTypes from "prop-types";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "universal-cookie";
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
  return (
    <div>
      {/* Display the logout button */}
      <Component />
    </div>
  );
}

ProtectedRoutes.propTypes = {
  Component: PropTypes.func,
};

export { ProtectedRoutes };
