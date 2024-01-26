// routes/userRoutes.js
import express from "express";
import { uploadAvtar, uploadHeroImage } from "../controllers/imagesController.js";
import { upload } from "../middlewares/upload.js";
const imageRouters = express.Router();
imageRouters.post("/userImage/:userId", upload.single("avtar"), uploadAvtar);
imageRouters.post(
  "/heroImage/:userId",
  upload.single("heroImage"),
  uploadHeroImage
);
export { imageRouters };