const analyzeImage = async (req, res) => {

    try {

        if (!req.file) {
            return res.status(400).json({
                message: "No image uploaded."
            });
        }

        // Simulate AI thinking time
        await new Promise(resolve => setTimeout(resolve, 2000));

        res.json({
            hazard: "Fire Hazard",
            severity: "High",
            confidence: "96%",
            recommendation: "Evacuate the area immediately."
        });

    } catch (error) {

        console.error(error);

        res.status(500).json({
            message: "Analysis failed."
        });

    }

};

export default analyzeImage;