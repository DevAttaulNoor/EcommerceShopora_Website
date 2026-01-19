import { cookies } from "next/headers";
import jwt from "jsonwebtoken";
import User from "@/models/User.js";
import connectDB from "@/libs/database.js";

export const requireAuth = async () => {
    const token = cookies().get("token")?.value;

    if (!token) {
        throw new Error("Not authenticated");
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    await connectDB();

    const user = await User.findById(decoded.id).select("-password");

    if (!user) {
        throw new Error("User not found");
    }

    return user;
};