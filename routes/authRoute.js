import express from "express";
import {
  registerController,
  loginController,
  testController,
} from "../controllers/authController.js";
import { isAdmin, requireSignIn } from "../middlewares/authMiddleware.js";

// Router Object
const router = express.Router();

// Routing
// REGISTER || METHOD POST
router.post("/register", registerController);

// LOGIN || METHOD POST
router.post("/login", loginController);

// test route
router.get("/test", requireSignIn, isAdmin, testController);

export default router;
