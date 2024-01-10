// controllers/blogPostController.js
import { BlogPost } from "./../models/blogPost.js";

// Create a new blog post
export const createBlogPost = async (req, res) => {
  try {
    const blogPost = new BlogPost(req.body);
    await blogPost.save();
    res.status(201).json(blogPost);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Get a single blog post by ID
export const getBlogPostById = async (req, res) => {
  try {
    const blogPost = await BlogPost.findById(req.params.id)
      .populate("author")
      .populate("comments.user");
    if (!blogPost) {
      return res.status(404).json({ message: "Blog post not found" });
    }
    res.json(blogPost);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Add more CRUD operations as needed (update, delete, get all, etc.)
