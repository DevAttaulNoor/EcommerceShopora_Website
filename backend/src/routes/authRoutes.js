import { Router } from "express";
import { loginUser, logoutUser, registerUser } from "../controllers/authController.js";

const router = Router();

// POST /api/auth/login → Logging in an existing user
router.post("/login", loginUser);

// POST /api/auth/register → Register a new user
router.post("/register", registerUser);

// POST /api/auth/logout → Logging out a user
router.post("/logout", logoutUser);

export default router;