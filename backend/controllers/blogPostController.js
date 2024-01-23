// controllers/blogPostController.js
import { BlogPost } from "./../models/blogPost.js";
import { Comment } from "../models/comment.js";
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
      .populate("allComments.comments");
    if (!blogPost) {
      return res.status(404).json({ message: "Blog post not found" });
    }
    res.json(blogPost);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Update blog post by ID
export const updateBlogPostById = async (req, res) => {
  try {
    const { id } = req.params;
    const updateblogPost = await BlogPost.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.json({
      status: 200,
      message: "Success",
      updateblogPost,
    });
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: error.message,
    });
  }
};
// Delete a specific comment by its ID
export const deleteBlogPostById = async (req, res) => {
  try {
    const { id } = req.params;

    // Find the associated blog post
    const blogPost = await BlogPost.findById(id);
    if (!blogPost) {
      return res.status(404).json({ message: "This Blog Post not found" });
    }
    // Get all comment IDs associated with the blog post
    const commentIds = blogPost.allComments.map((id) => id.comments);
    // Remove the blog post
    await BlogPost.findByIdAndDelete(id);
    console.log("This is comment ids:", commentIds);

    // Delete associated comments using their IDs
    if (commentIds) {
      for (const commentId of commentIds) {
        await Comment.findByIdAndDelete(commentId);
      }
    }
    res.status(200).json({
      status: "success",
      message: "BlogPost or associated comments deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      status: "Failed to delete blog post",
      message: error.message,
    });
  }
};
export const getBlogPostByCategory = async (req, res) => {
  try {
    const { id } = req.params;
    const selectedBlogPost = await BlogPost.find({ category: id });
    res.json({
      status: "Fetched All Categorized Posts!",
      totalPosts: selectedBlogPost.length,
      selectedBlogPost,
    });
  } catch (err) {
    res.json({
      status: "error",
      message: err.message,
    });
  }
};

// Get All Blog Posts
export const getAllBlogPosts = async (req, res) => {
  try {
    const blogPosts = await BlogPost.find({});
    if (!blogPosts || blogPosts.length === 0) {
      return res.status(404).json({ message: "No Blog Posts in DataBase!" });
    }
    res.json({
      status: 200,
      message: "All Blog Posts are found.",
      totalBlogPosts: blogPosts.length,
      blogPosts,
    });
  } catch (error) {
    res.status(500).json({
      status: 500,
      message: error.message,
    });
  }
};
export const blogsBylogin = async (req, res) => {
  try {
    // Assuming you have user information stored in req.user after authentication
    const { userId } = req.user;
    // const { userId } = req.params;

    // Find all blog posts where the author field matches the logged-in user's ID
    const userBlogs = await BlogPost.find({ author: userId });

    res.json({
      status: 200,
      totalblogsByUser: userBlogs.length,
      userBlogs,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};
