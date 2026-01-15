import cors from "cors";
import express from "express";
import { config } from "dotenv";
import connectDB from "./src/config/databaseConfig.js";

config();
connectDB()

const app = express();
app.use(express.json());
app.use("/public", express.static("public"));

app.use(cors({
    origin: process.env.FRONTEND_DEV_URL,
    credentials: true,
}));

app.get("/", (req, res) => { res.send("API is running..."); });
app.listen(process.env.BACKEND_PORT, () => console.log(`Server running on port ${process.env.BACKEND_PORT}`));