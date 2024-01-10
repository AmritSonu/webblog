// routes/userRoutes.js
import express from "express";
import { getUserById, createUser } from "../controllers/userControllers.js";
const userRouters = express.Router();
userRouters.post("/", createUser);
userRouters.get("/:id", getUserById);
export { userRouters };
