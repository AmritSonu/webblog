import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { BlogPost } from "../models/blogPost.js";
import { User } from "../models/userModel.js";
import { uploadToCloudinary } from "../Fileupload/cloudinaryConfig.js";
export const createUser = async (req, res) => {
  try {
    const user = new User(req.body);
    // Hash the password and save it to the user object
    user.password = await bcrypt.hash(user.password, 10);
    if (!user.firstname || !user.lastname || !user.email || !user.password) {
      res.json({
        status: 400,
        message: "Please enter All Required Fields!",
      });
    }
    const existingUser = await User.findOne({
      email: req.body.email,
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
    // console.log(user);
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

// **************
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
// **************
export const login = async (req, res) => {
  // check if email exists
  User.findOne({ email: req.body.email })

    // if email exists
    .then((user) => {
      // compare the password entered and the hashed password found
      bcrypt
        .compare(req.body.password, user.password)

        // if the passwords match
        .then((passwordCheck) => {
          // check if password matches
          if (!passwordCheck) {
            return res.status(400).send({
              message: "Passwords does not match",
              error,
            });
          }
          //   create JWT token
          const token = jwt.sign(
            {
              userId: user._id,
              userEmail: user.email,
            },
            "RANDOM-TOKEN",
            { expiresIn: "12h" }
          );

          //   return success response
          res.status(200).send({
            message: "Login Successful",
            email: user.email,
            token,
          });
        })
        // catch error if password does not match
        .catch((error) => {
          res.status(400).send({
            message: "Passwords does not match",
            error,
          });
        });
    })
    // catch error if email does not exist
    .catch((e) => {
      res.status(404).send({
        message: "Email not found",
        e,
      });
    });
};

// Update user data with a PUT request
export const updateUserById = async (req, res) => {
  const { userId } = req.params;
  try {
    // Find the user by ID
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }
    // Update user data concisely
    const fieldsToUpdate = ["firstname", "lastname", "email"];
    fieldsToUpdate.forEach((field) => {
      user[field] = req.body[field] || user[field];
    });
    
    // // Upload image to Cloudinary if file is present
    // if (req.file) {
    //   try {
    //     const imageData = await uploadToCloudinary(req.file.path, "image");
    //     // Set the avatar URL in the user model
    //     user.avtarUrl = imageData.url;
    //     // Update the user in the database
    //     await user.save();
    //   } catch (uploadError) {
    //     return res.status(500).json({
    //       error: "Failed to upload image on Cloudinary",
    //       message: uploadError.message,
    //     });
    //   }
    // }

    // // Save the updated user
    const updatedUser = await user.save();
    res.json({
      status: 200,
      updatedUser,
    });
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};
