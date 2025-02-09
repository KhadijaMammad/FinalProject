import {userController} from "../controllers/userController.js";
import express from "express";
export const router = express.Router();

router.get("/", userController.getAll);
router.get("/:id", userController.getById);
router.post("/register", userController.register);
router.post("/login", userController.login);
router.post("/confirm", userController.confirm);
