import express from "express";
import { isAdmin, requireSignIn } from "../middlewares/authMiddleware";
import { createCategoryController } from "../controllers/categoryController";

const router = express.Router();

//routes
router.get("create-category", requireSignIn, isAdmin, createCategoryController);

export default router;
