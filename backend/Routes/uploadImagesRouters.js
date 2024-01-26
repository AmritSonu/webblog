// routes/userRoutes.js
import express from "express";
import { uploadAvtar } from "../controllers/imagesController.js";
import { upload } from "../middlewares/upload.js";
const imageRouters = express.Router();
imageRouters.post("/userImage/:userId", upload.single("avtar"), uploadAvtar);
export { imageRouters };
