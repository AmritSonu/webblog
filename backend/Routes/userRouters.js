// routes/userRoutes.js
import express from "express";
import {
  getUserById,
  createUser,
  getUserByBlogPost,
  login,
} from "../controllers/userControllers.js";
const userRouters = express.Router();
userRouters.post("/", createUser);
userRouters.post("/login", login);
userRouters.get("/:id", getUserById);
userRouters.get("/userbyBlogpost/:blogPostId", getUserByBlogPost);
export { userRouters };
