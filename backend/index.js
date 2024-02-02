import express from "express";
import cors from "cors"; // Import the cors middleware
import dotenv from "dotenv";
import { connectDB } from "./db.js";
import { auth } from "./middlewares/auth.js";
import { userRouters } from "./Routes/userRouters.js";
import { blogPostRouter } from "./Routes/blogPostRoutes.js";
import { commentRouters } from "./Routes/commentRoutes.js";
import { authRouters } from "./Routes/authRoutes.js";
import { imageRouters } from "./Routes/uploadImagesRouters.js";

dotenv.config();

const PORT = process.env.PORT || 3000;
const app = express();

// Use cors middleware to enable CORS
app.use(cors());

app.use(express.json());

// ROUTE MOUNTING
app.use("/blogposts", blogPostRouter);
app.use("/blogposts/users", userRouters);
app.use("/blogposts/comments", commentRouters);
app.use("/auth", auth, authRouters);
app.use("/blogposts", imageRouters);

app.use("/", (req, res) => {
  res.send("Hello from Server");
});
// START SERVER AND CONNECT TO DATABASE
connectDB();
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
