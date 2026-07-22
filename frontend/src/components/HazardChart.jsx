import {
    PieChart,
    Pie,
    Cell,
    Tooltip,
    ResponsiveContainer,
    Legend,
} from "recharts";

const COLORS = [
    "#ef4444",
    "#3b82f6",
    "#f59e0b",
    "#10b981",
    "#8b5cf6",
    "#06b6d4",
    "#ec4899",
];

function HazardChart({ hazardCounts }) {

    const chartData = hazardCounts.map((item) => ({
        name: item._id,
        value: item.count,
    }));


    if (chartData.length === 0) {

        return (

            <div className="chart-card">

                <h2>Hazard Distribution</h2>

                <p>No hazard reports available yet.</p>

            </div>

        );

    }

    return (

        <div className="chart-card">

            <h2>Hazard Distribution</h2>

            <ResponsiveContainer
                width="100%"
                height={320}
            >

                <PieChart>

                    <Pie
                        data={chartData}
                        dataKey="value"
                        nameKey="name"
                        outerRadius={110}
                        label
                    >

                        {

                            chartData.map((entry, index) => (

                                <Cell
                                    key={index}
                                    fill={COLORS[index % COLORS.length]}
                                />

                            ))

                        }

                    </Pie>

                    <Tooltip />

                    <Legend />

                </PieChart>

            </ResponsiveContainer>

        </div>

    );

}

export default HazardChart;