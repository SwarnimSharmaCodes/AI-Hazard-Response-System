import { analyzeHazardImage } from "../services/geminiService.js";
import Report from "../models/Report.js";


const analyzeImage = async (req, res) => {

    try {

        if (!req.file) {
            return res.status(400).json({
                message: "No image uploaded."
            });
        }

        // Simulate AI thinking time
        await new Promise(resolve => setTimeout(resolve, 2000));

        console.log(req.file);
        console.log(req.file.path);

        const aiResponse = await analyzeHazardImage(
            req.file.buffer,
            req.file.mimetype
        );

        console.log(aiResponse);

        const cleanResponse = aiResponse
            .replace(/```json/g, "")
            .replace(/```/g, "")
            .trim();

        const aiData = JSON.parse(cleanResponse);

        const hazard = aiData.hazardType.toLowerCase();

        if (hazard.includes("fire"))
            aiData.hazardType = "Fire";

        else if (hazard.includes("elect"))
            aiData.hazardType = "Electrical";

        else if (hazard.includes("chemical"))
            aiData.hazardType = "Chemical";

        else if (hazard.includes("gas"))
            aiData.hazardType = "Gas";

        else if (hazard.includes("machine"))
            aiData.hazardType = "Machinery";

        else
            aiData.hazardType = "Other";

        const reportData = {
            user: req.user.id, 
            hazardType: aiData.hazardType,
            location: "Unknown",
            severity: aiData.severity,
            confidence: aiData.confidence,
            description: `${aiData.hazardType} detected from uploaded image.`,
            recommendation: aiData.recommendation,
        };

        const savedReport = await Report.create(reportData);


        res.json(savedReport);

    } catch (error) {

        console.error(error);

        res.status(500).json({
            message: "Analysis failed."
        });

    }

};
const getReports = async (req, res) => {
    try {

        const reports = await Report.find({
            user: req.user.id,
        }).sort({
            createdAt: -1,
        });

        res.status(200).json(reports);

    } catch (error) {

        console.error(error);

        res.status(500).json({
            message: "Unable to fetch reports."
        });

    }
};

export {
    analyzeImage, getReports
};