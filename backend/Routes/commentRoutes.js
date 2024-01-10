// routes/userRoutes.js
import express from "express";
import {
  createComment,
  getCommentsByBlogPostId,
} from "../controllers/commentController.js";
const commentRouters = express.Router();
commentRouters.post("/", createComment);
commentRouters.get("/:blogPostId", getCommentsByBlogPostId);
export { commentRouters };
