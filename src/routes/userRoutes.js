import express from "express";
import {
  createUser,
  getUsers,
  getUserById,
  updateUser,
  deleteUser,
} from "../controllers/userController.js";
import { body } from "express-validator";

export const userRoutes = express.Router();

userRoutes.get("/", getUsers);
userRoutes.get("/:id", getUserById);
userRoutes.post(
  "/",
  [
    body("name").trim().isLength({ min: 5 }),
    body("password").trim().isLength({ min: 10 }),
  ],
  createUser
);
userRoutes.put("/:id", updateUser);
userRoutes.delete("/:id", deleteUser);
