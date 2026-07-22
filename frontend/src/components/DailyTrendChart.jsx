import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    Tooltip,
    ResponsiveContainer,
    CartesianGrid,
} from "recharts";

function DailyTrendChart({ dailyReports }) {

    const data = dailyReports.map((item) => ({
        date: item._id,
        reports: item.count,
    }));

    if (data.length === 0) {

        return (

            <div className="chart-card">

                <h2>Daily Trend</h2>

                <p>No trend data available.</p>

            </div>

        );

    }

    return (

        <div className="chart-card">

            <h2>Daily Analysis Trend</h2>

            <ResponsiveContainer width="100%" height={320}>

                <LineChart data={data}>

                    <CartesianGrid strokeDasharray="3 3" />

                    <XAxis dataKey="date" />

                    <YAxis />

                    <Tooltip />

                    <Line
                        type="monotone"
                        dataKey="reports"
                        stroke="#10b981"
                        strokeWidth={3}
                    />

                </LineChart>

            </ResponsiveContainer>

        </div>

    );

}

export default DailyTrendChart;