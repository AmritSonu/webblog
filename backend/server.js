import express from "express";
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
app.use(express.json());

// ROUTE MOUNTING
app.use("/blogposts", blogPostRouter);
app.use("/blogposts/users", userRouters);
app.use("/blogposts/comments", commentRouters);
app.use("/auth", auth, authRouters);
app.use('/blogposts',imageRouters)

// START SERVER AND CONNECT TO DATABASE
connectDB();
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
