import {
    PieChart,
    Pie,
    Cell,
    Tooltip,
    ResponsiveContainer
} from "recharts";

const data = [
    { name: "Fire", value: 81 },
    { name: "Chemical", value: 54 },
    { name: "Electrical", value: 38 },
    { name: "Gas", value: 29 },
    { name: "Explosion", value: 18 }
];

const COLORS = [
    "#ef4444",
    "#3b82f6",
    "#f59e0b",
    "#10b981",
    "#8b5cf6"
];

function HazardChart() {

    return (

        <div className="chart-card">

            <h2>Hazard Distribution</h2>

            <ResponsiveContainer
                width="100%"
                height={300}
            >

                <PieChart>

                    <Pie
                        data={data}
                        dataKey="value"
                        outerRadius={100}
                    >

                        {

                            data.map((entry, index) => (

                                <Cell
                                    key={index}
                                    fill={COLORS[index]}
                                />

                            ))

                        }

                    </Pie>

                    <Tooltip />

                </PieChart>

            </ResponsiveContainer>

        </div>

    );

}

export default HazardChart;