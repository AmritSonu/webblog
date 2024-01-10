import express from "express";
import {
  createBlogPost,
  getBlogPostById,
} from "../controllers/blogPostController.js";

const blogPostRouter = express.Router();

// Create a new blog post
blogPostRouter.post("/", createBlogPost);

// Get a single blog post by ID
blogPostRouter.get("/:id", getBlogPostById);

// Add more routes as needed (update, delete, get all, etc.)
export { blogPostRouter };