import { BlogPost } from "../models/blogPost.js";
import { User } from "../models/userModel.js";
export const createUser = async (req, res) => {
  try {
    const user = new User(req.body);
    if (
      !user.firstname ||
      !user.lastname ||
      !user.email ||
      !user.username ||
      !user.password ||
      !user.comfirmPassword
    ) {
      res.json({
        status: 400,
        message: "Please enter All Required Fields!",
      });
    }
    const existingUser = await User.findOne({
      $or: [{ email: req.body.email }, { username: req.body.username }],
    });
    if (existingUser) {
      res.json({
        status: 400,
        message: "This user or email already exists!",
      });
    }
    await user.save();
    res.json({
      message: "Post user successfully!",
      user,
    });
  } catch (error) {
    console.log(error);
    res.json({
      status: 404,
      error: error.message,
    });
  }
};
export const getUserById = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    console.log(user);
    if (!user) {
      return res.json({
        status: 404,
        message: "User not found",
      });
    }
    res.json({
      status: 200,
      user,
    });
  } catch (error) {
    res.status(500).json({
      status: 500,
      message: error.message,
    });
  }
};

// function for get user information by blogpost ID...
async function findUserByBlogPost(blogPostId) {
  try {
    const blogPost = await BlogPost.findById(blogPostId);
    if (!blogPost) {
      return null;
    }
    const user = await User.findById(blogPost.author);
    return user;
  } catch (error) {
    console.error("Error fetching user by blog post:", error);
    throw error;
  }
}

export const getUserByBlogPost = async (req, res) => {
  try {
    const { blogPostId } = req.params;
    const user = await findUserByBlogPost(blogPostId);
    if (!user) {
      return res
        .status(404)
        .json({ error: "User not found for the given blog post." });
    }
    res.json(user);
  } catch (error) {
    res.status(500).json({
      status: 500,
      message: error.message,
    });
  }
};
