import jwt from "jsonwebtoken";
import User from "@/models/User.js";

export const loginUser = async ({ email, password }) => {
    const user = await User.findOne({ email }).select("+password");

    if (!user) {
        throw new Error("Email not found");
    }

    const isMatch = user.comparePassword(password);
    if (!isMatch) {
        throw new Error("Invalid password");
    }

    const token = jwt.sign(
        { id: user._id, role: user.role },
        process.env.JWT_SECRET,
        { expiresIn: process.env.JWT_EXPIRES || "7d" }
    );

    const userData = user.toObject();
    delete userData.password;

    return { token, user: userData };
};

export const registerUser = async ({ name, email, password }) => {
    if (!name || !email || !password) {
        throw new Error("All fields required");
    }

    const userExists = await User.findOne({ email });
    if (userExists) {
        throw new Error("Email already registered");
    }

    const user = await User.create({ name, email, password });

    const token = jwt.sign(
        { id: user._id },
        process.env.JWT_SECRET,
        { expiresIn: process.env.JWT_EXPIRES || "7d" }
    );

    const { password: _, ...userData } = user._doc;

    return { token, user: userData };
};