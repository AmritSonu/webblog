// The Comment model represents individual comments made by users on specific blog posts.
// Each comment has text, a reference to the user who made the comment,
//  and a reference to the blog post on which the comment was made.

import mongoose from "mongoose";
const commentSchema = new mongoose.Schema({
  text: String,
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  blogPost: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "BlogPost",
  },
  // other fields as needed
});
const Comment = mongoose.model("Comment", commentSchema);
export default Comment;