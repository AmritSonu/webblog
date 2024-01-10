import express from "express";
import { userRouters } from "./Routes/userRouters.js"; // Rename to userRouter
import { blogPostRouter } from "./Routes/blogPostRoutes.js"; // Rename to blogPostRouter
import { connectDB } from "./db.js";
import dotenv from "dotenv";

dotenv.config();
const PORT = process.env.PORT || 3000;

// INITIALIZATION EXPRESS
const app = express();

// PARSE JSON() DATA FOR REQUEST BODY
app.use(express.json());

// ROUTE MOUNTING
app.use("/users", userRouters); // Use userRouter for /users path
app.use("/blogposts", blogPostRouter); // Use blogPostRouter for /blogposts path

// CONNECT TO DATABASE
connectDB();

// RUN SERVER
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
