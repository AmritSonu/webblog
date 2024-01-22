// routes/userRoutes.js
import express from "express";
import { uploadIndexBlogImage } from "../controllers/imagesController.js";

const imageRouters = express.Router();
imageRouters.post("/:id", uploadIndexBlogImage);
export { imageRouters };
