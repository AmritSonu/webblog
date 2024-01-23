import jwt from "jsonwebtoken";
  export const auth = async (request, response, next) => {
  try {
    const authorizationHeader = request.headers.authorization;

    if (!authorizationHeader) {
      return response.status(401).json({
        error: "Unauthorized: Missing token",
      });
    }
    const token = request.headers.authorization.split(" ")[1];
    // console.log("Token:", token);
    const decodedToken = await jwt.verify(token, "RANDOM-TOKEN");
    const user = decodedToken;
    request.user = user;
    next();
  } catch (error) {
    console.error("Authentication Error:", error);
    response.status(401).json({
      error: "Invalid request or token",
    });
  }
};
