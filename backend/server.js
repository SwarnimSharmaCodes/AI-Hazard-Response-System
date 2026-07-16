import "dotenv/config";
import express from "express";
import cors from "cors";
import connectDB from "./config/db.js";

import analyzeRoutes from "./routes/analyze.js";

import authRoutes from "./routes/auth.js";

connectDB();


const app = express();

app.use(cors());

app.use(express.json());

app.use("/api", analyzeRoutes);

app.use("/api/auth", authRoutes);

const PORT = 5000;

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});