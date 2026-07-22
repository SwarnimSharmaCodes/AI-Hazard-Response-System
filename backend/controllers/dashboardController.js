import mongoose from "mongoose";
import Report from "../models/Report.js";


const getDashboardData = async (req, res) => {

    console.log("Dashboard route reached");

    try {

        const userId = req.user.id;

        const objectId = new mongoose.Types.ObjectId(userId);

        const totalReports = await Report.countDocuments({
            user: userId,
        });

        const recentReports = await Report.find({ user: req.user.id })
    .sort({ createdAt: -1 })
    .limit(5)
    .select("hazardType severity confidence createdAt");

        const hazardCounts = await Report.aggregate([
            {
                $match: {
                    user: objectId,
                },
            },
            {
                $group: {
                    _id: "$hazardType",
                    count: {
                        $sum: 1,
                    },
                },
            },
        ]);

        const severityCounts = await Report.aggregate([
            {
                $match: {
                    user: objectId,
                },
            },
            {
                $group: {
                    _id: "$severity",
                    count: {
                        $sum: 1,
                    },
                },
            },
        ]);

        const dailyReports = await Report.aggregate([
            {
                $match: {
                    user: objectId,
                },
            },
            {
                $group: {
                    _id: {
                        $dateToString: {
                            format: "%Y-%m-%d",
                            date: "$createdAt",
                        },
                    },
                    count: {
                        $sum: 1,
                    },
                },
            },
            {
                $sort: {
                    "_id": 1,
                },
            },
        ]);

        res.json({
            totalReports,
            hazardCounts,
            severityCounts,
            dailyReports,
            recentReports,
        });

    } catch (error) {

        console.error(error);

        res.status(500).json({
            message: "Unable to fetch dashboard data.",
        });

    }
};

export { getDashboardData };