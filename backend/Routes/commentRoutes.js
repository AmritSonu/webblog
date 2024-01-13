// routes/userRoutes.js
import express from "express";
import {
  createComment,
  deleteComment,
  getCommentsByBlogPostId,  
  updateComment,
} from "../controllers/commentController.js";
const commentRouters = express.Router();
commentRouters.post("/", createComment);
commentRouters.get("/:blogPostId", getCommentsByBlogPostId);
commentRouters.put("/:id", updateComment);
commentRouters.delete("/:id", deleteComment);
export { commentRouters };
