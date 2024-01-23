// routes/userRoutes.js
import express from "express";
import { authUser } from "../controllers/authController.js";
import { auth } from "../middlewares/auth.js";
const authRouters = express.Router();
authRouters.get("/endpoint", auth, authUser);

export { authRouters };
