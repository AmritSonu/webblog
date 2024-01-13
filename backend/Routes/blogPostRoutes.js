import express from "express";
import {
  createBlogPost,
  deleteBlogPostById,
  getAllBlogPosts,
  getBlogPostByCategory,
  getBlogPostById,
  updateBlogPostById,
} from "../controllers/blogPostController.js";

const blogPostRouter = express.Router();

blogPostRouter.post("/", createBlogPost);
blogPostRouter.get("/", getAllBlogPosts);
// Get a single blog post by ID
blogPostRouter.get("/:id", getBlogPostById);
blogPostRouter.put("/:id", updateBlogPostById);
blogPostRouter.delete("/:id", deleteBlogPostById);
blogPostRouter.get("/category/:id", getBlogPostByCategory);

export { blogPostRouter };
