import jwt from "jsonwebtoken";

export const auth = async (request, response, next) => {
  try {
    // Get the token from the authorization header
    const token = request.headers.authorization.split(" ")[1];

    // Check if the token matches the supposed origin
    const decodedToken = await jwt.verify(token, "RANDOM-TOKEN"); // Replace with your actual secret key

    // Retrieve the user details of the logged-in user
    const user = decodedToken;

    // Pass the user down to the endpoints here
    request.user = user;

    // Pass down functionality to the endpoint
    next();
  } catch (error) {
    response.status(401).json({
      error: "Invalid request or token", // Improved error message
    });
  }
};
