import express from "express";
import {
  registerController,
  loginController,
} from "../controllers/authController.js";

// Router Object
const router = express.Router();

// Routing
// REGISTER || METHOD POST
router.post("/register", registerController);

// LOGIN || METHOD POST
router.post("/login", loginController);

export default router;
