import express from "express";

import upload from "../middlewares/upload.js";

import analyzeImage from "../controllers/analyzeController.js";

const router = express.Router();

router.post(
    "/analyze",
    upload.single("image"),
    analyzeImage
);

export default router;