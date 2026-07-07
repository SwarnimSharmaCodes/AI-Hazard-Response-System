export const analyzeImage = async (req, res) => {

    try {

        if (!req.file) {

            return res.status(400).json({

                message: "No image uploaded."

            });

        }

        res.status(200).json({

            success: true,

            hazard: "Fire Hazard",

            severity: "High",

            confidence: 96,

            recommendation: "Evacuate the area immediately.",

            filename: req.file.originalname

        });

    }

    catch (error) {

        console.error(error);

        res.status(500).json({

            message: "Server Error"

        });

    }

};