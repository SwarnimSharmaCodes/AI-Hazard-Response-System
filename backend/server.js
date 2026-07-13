import "dotenv/config";
import express from "express";
import cors from "cors";
import connectDB from "./config/db.js";

import analyzeRoutes from "./routes/analyze.js";

connectDB();


const app = express();

app.use(cors());

app.use(express.json());

app.use("/api", analyzeRoutes);

const PORT = 5000;

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});