import mongoose from "mongoose";

const reportSchema = new mongoose.Schema(
    {
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true,
        },
        hazardType: {
            type: String,
            required: true,
        },

        location: {
            type: String,
            required: true,
        },

        severity: {
            type: String,
            required: true,
        },
        confidence: {
            type: Number,
            required: true,
        },

        description: {
            type: String,
            required: true,
        },

        recommendation: {
            type: String,
            required: true,
        },
    },
    {
        timestamps: true,
    }
);

const Report = mongoose.model("Report", reportSchema);
export default Report;