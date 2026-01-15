import cors from "cors";
import express from "express";
import { config } from "dotenv";
import cookieParser from "cookie-parser";
import authRoutes from "./src/routes/authRoutes.js";
import connectDB from "./src/config/databaseConfig.js";

config();
connectDB()

const app = express();
app.use(cookieParser());
app.use(express.json());
app.use("/public", express.static("public"));

app.use(cors({
    origin: process.env.FRONTEND_DEV_URL,
    credentials: true,
}));

// Mount routes
app.use("/api/auth", authRoutes);

app.get("/", (req, res) => { res.send("API is running..."); });
app.listen(process.env.BACKEND_PORT, () => console.log(`Server running on port ${process.env.BACKEND_PORT}`));