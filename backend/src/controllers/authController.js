import jwt from "jsonwebtoken";
import User from "../models/User.js";

// Logging out a user
export const logoutUser = (req, res) => {
    res.clearCookie("token");
    res.json({ message: "Logged out successfully" });
};

// Logging in an existing user
export const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({ message: "Email and password is required" });
        }

        const user = await User.findOne({ email });

        if (!user) {
            return res.status(404).json({ message: "Email not correct" });
        }

        if (user.password !== password) {
            return res.status(401).json({ message: "Invalid password" });
        }

        // ✅ Create JWT
        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
            expiresIn: process.env.JWT_EXPIRES || "7d",
        });

        // ✅ Send token in HttpOnly cookie
        res.cookie("token", token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            sameSite: "strict",
            maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
        });

        // ✅ Return user (without password)
        const { password: _, ...userData } = user._doc;

        res.status(200).json({ message: "Login successful", user: userData });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Register a new user
export const registerUser = async (req, res) => {
    try {
        const { name, email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({ message: "All fields required" }); // ❌ bad request
        }

        // Check if email already exists
        const userExists = await User.findOne({ email });
        if (userExists) {
            return res.status(409).json({ message: "Email already registered" }); // ❌ conflict
        }

        // Create user
        const user = await User.create({ name, email, password });

        // ✅ Create JWT
        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
            expiresIn: process.env.JWT_EXPIRES || "7d",
        });

        // ✅ Send token in HttpOnly cookie
        res.cookie("token", token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            sameSite: "strict",
            maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
        });

        // ✅ Return user without password
        const { password: _, ...userData } = user._doc;

        res.status(201).json({ message: "Registered successful", user: userData });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};