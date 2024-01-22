// routes/userRoutes.js
import express from "express";
import { authUser } from "../controllers/authController.js";
const authRouters = express.Router();
authRouters.get("/endpoint", authUser);

export { authRouters };
