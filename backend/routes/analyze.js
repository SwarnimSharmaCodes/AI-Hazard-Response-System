import express from "express";

import upload from "../middlewares/upload.js";

import { analyzeImage, getReports } from "../controllers/analyzeController.js";

const router = express.Router();

router.post(
    "/analyze",
    upload.single("image"),
    analyzeImage
);

router.get("/reports", getReports);

export default router;