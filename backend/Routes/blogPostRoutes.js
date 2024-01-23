import express from "express";
import {
  blogsBylogin,
  createBlogPost,
  deleteBlogPostById,
  getAllBlogPosts,
  getBlogPostByCategory,
  getBlogPostById,
  updateBlogPostById,
} from "../controllers/blogPostController.js";
import { auth } from "../middlewares/auth.js";

const blogPostRouter = express.Router();

blogPostRouter.post("/", createBlogPost);
blogPostRouter.get("/", getAllBlogPosts);
blogPostRouter.get("/user/blogs", auth, blogsBylogin);
// Get a single blog post by IDs
blogPostRouter.get("/:id", getBlogPostById);
blogPostRouter.put("/:id", updateBlogPostById);
blogPostRouter.delete("/:id", deleteBlogPostById);
blogPostRouter.get("/category/:id", getBlogPostByCategory);
export { blogPostRouter };
