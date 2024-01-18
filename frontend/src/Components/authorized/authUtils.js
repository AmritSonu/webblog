import Cookies from "universal-cookie";

const cookies = new Cookies();

export const logout = () => {
  // Clear the token or any other authentication-related information
  cookies.remove("TOKEN", { path: "/" });
};
