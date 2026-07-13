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

        const reportData = {
            hazardType: "Fire Hazard",
            location: "Unknown",
            severity: "High",
            description: "Fire hazard detected from uploaded image.",
            recommendation: "Evacuate the area immediately."
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

        const reports = await Report.find().sort({ createdAt: -1 });

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