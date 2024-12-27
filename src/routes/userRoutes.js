import express from "express";
import {
  createUser,
  getUsers,
  getUserById,
  updateUser,
  deleteUser,
} from "../controllers/userController.js";

export const userRoutes = express.Router();

userRoutes.post("/", createUser);
userRoutes.get("/", getUsers);
userRoutes.get("/:id", getUserById);
userRoutes.put("/:id", updateUser);
userRoutes.delete("/:id", deleteUser);
