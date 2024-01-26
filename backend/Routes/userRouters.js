// routes/userRoutes.js
import express from "express";
import {
  getUserById,
  createUser,
  getUserByBlogPost,
  login,
  updateUserById,
} from "../controllers/userControllers.js";
import { upload } from "../middlewares/upload.js";
const userRouters = express.Router();
userRouters.post("/", createUser);
userRouters.post("/login", login);
userRouters.get("/:id", getUserById);
userRouters.get("/userbyBlogpost/:blogPostId", getUserByBlogPost);
userRouters.put("/:userId", updateUserById);
export { userRouters };
