import express from "express";
import {
  createBlogPost,
  deleteBlogPostById,
  getAllBlogPosts,
  getBlogPostById,
  updateBlogPostById,
} from "../controllers/blogPostController.js";

const blogPostRouter = express.Router();

// Create a new blog post
blogPostRouter.post("/", createBlogPost);

// GET ALL BLOG POSTS
blogPostRouter.get("/", getAllBlogPosts);
// Get a single blog post by ID
blogPostRouter.get("/:id", getBlogPostById);
// Update Blog blog post by ID

blogPostRouter.put("/:id", updateBlogPostById);
// Delete Blog blog post by ID

blogPostRouter.delete("/:id", deleteBlogPostById);
// Add more routes as needed (update, delete, get all, etc.)
export { blogPostRouter };
