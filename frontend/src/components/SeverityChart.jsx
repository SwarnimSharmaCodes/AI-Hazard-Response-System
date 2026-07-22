import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    Tooltip,
    ResponsiveContainer,
    CartesianGrid,
} from "recharts";

function SeverityChart({ severityCounts }) {

    const data = severityCounts.map((item) => ({
        severity: item._id,
        count: item.count,
    }));

    if (data.length === 0) {

        return (

            <div className="chart-card">

                <h2>Severity Distribution</h2>

                <p>No severity data available.</p>

            </div>

        );

    }

    return (

        <div className="chart-card">

            <h2>Severity Distribution</h2>

            <ResponsiveContainer width="100%" height={320}>

                <BarChart data={data}>

                    <CartesianGrid strokeDasharray="3 3" />

                    <XAxis dataKey="severity" />

                    <YAxis />

                    <Tooltip />

                    <Bar
                        dataKey="count"
                        fill="#3b82f6"
                    />

                </BarChart>

            </ResponsiveContainer>

        </div>

    );

}

export default SeverityChart;