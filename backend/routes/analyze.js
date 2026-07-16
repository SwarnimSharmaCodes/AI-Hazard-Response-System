import express from "express";

import protect from "../middlewares/authMiddleware.js";
import upload from "../middlewares/upload.js";


import { analyzeImage, getReports } from "../controllers/analyzeController.js";

const router = express.Router();

router.post(
    "/analyze",
    protect,
    upload.single("image"),
    analyzeImage
);

// router.post(
//     "/analyze",

//     (req,res,next)=>{
//         console.log("Reached Route");
//         next();
//     },

//     upload.single("image"),

//     (req,res,next)=>{
//         console.log("Upload Done");
//         next();
//     },

//     analyzeImage
// );

router.get("/reports", protect, getReports);

export default router;