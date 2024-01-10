// The User model represents users who can register, log in, and interact with your blog website.

import mongoose from "mongoose";
const userSchema = new mongoose.Schema({
  firstname: {
    type: String,
    required: true,
  },
  lastname: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  comfirmPassword: {
    type: String,
    required: true,
  },
});
export const User = mongoose.model("User", userSchema);

