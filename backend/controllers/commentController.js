import { Comment } from "../models/comment.js";
import { BlogPost } from "../models/blogPost.js";

// Create a new comment for a specific blog post
export const createComment = async (req, res) => {
  try {
    const { text, user, blogPost } = req.body; // Assuming userId and blogPostId are sent in the request body
    const newComment = new Comment({
      text,
      user,
      blogPost,
    });
    await newComment.save();
    console.log(newComment.blogPost);
    // Update the associated BlogPost to include the new comment ID
    await BlogPost.findByIdAndUpdate(blogPost, {
      $push: { allComments: { comments: newComment._id } },
    });
    res.status(201).json({
      status: "success",
      newComment,
    });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Failed to create comment", error: error.message });
  }
};

// Get all comments for a specific blog post
export const getCommentsByBlogPostId = async (req, res) => {
  try {
    const { blogPostId } = req.params;
    const comments = await Comment.find({ blogPost: blogPostId }).populate(
      "user"
    ); // Populate the user details
    console.log(comments, blogPostId);
    res.status(200).json({
      status: "success",
      comments,
    });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Failed to fetch comments", error: error.message });
  }
};

// // Update a specific comment by its ID
// export const updateComment = async (req, res) => {
//   try {
//     const { id } = req.params;
//     const updatedComment = await Comment.findByIdAndUpdate(id, req.body, {
//       new: true,
//     });

//     res.status(200).json(updatedComment);
//   } catch (error) {
//     res
//       .status(500)
//       .json({ message: "Failed to update comment", error: error.message });
//   }
// };

// // Delete a specific comment by its ID
// export const deleteComment = async (req, res) => {
//   try {
//     const { id } = req.params;

//     // Find the associated blog post and remove the comment ID from its 'allComments' array
//     const comment = await Comment.findById(id);
//     await BlogPost.findByIdAndUpdate(comment.blogPost, {
//       $pull: { allComments: { comments: id } },
//     });

//     await Comment.findByIdAndRemove(id);

//     res.status(200).json({ message: "Comment deleted successfully" });
//   } catch (error) {
//     res
//       .status(500)
//       .json({ message: "Failed to delete comment", error: error.message });
//   }
// };
