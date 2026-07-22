import { useEffect, useState } from "react";

import DashboardCard from "../components/DashboardCard";
import HazardChart from "../components/HazardChart";
import AnalysisTable from "../components/AnalysisTable";
import SeverityChart from "../components/SeverityChart";
import DailyTrendChart from "../components/DailyTrendChart";

import { getDashboardData } from "../services/dashboardApi";

import "../styles/pages.css";

function Dashboard() {

    const [dashboard, setDashboard] = useState({
        totalReports: 0,
        hazardCounts: [],
        severityCounts: [],
        dailyReports: [],
        recentReports: [],
    });

    useEffect(() => {

        loadDashboard();

    }, []);

    const loadDashboard = async () => {

        try {

            const data = await getDashboardData();

            setDashboard(data);

        }

        catch (error) {

            console.error(error);

        }

    };

    return (

        <section className="dashboard-page">

            <h1>Industrial Safety Dashboard</h1>

            <p>
                Live monitoring of industrial hazard analysis.
            </p>

            <div className="dashboard-grid">

                <DashboardCard
                    title="Total Reports"
                    value={dashboard.totalReports}
                    color="blue"
                />

                <DashboardCard
                    title="Hazard Types"
                    value={dashboard.hazardCounts.length}
                    color="red"
                />

                <DashboardCard
                    title="Severity Levels"
                    value={dashboard.severityCounts.length}
                    color="orange"
                />

                <DashboardCard
                    title="Analysis Days"
                    value={dashboard.dailyReports.length}
                    color="green"
                />

            </div>

            <div className="charts-grid">

                <HazardChart
                    hazardCounts={dashboard.hazardCounts}
                />

                <SeverityChart
                    severityCounts={dashboard.severityCounts}
                />

                <DailyTrendChart
                    dailyReports={dashboard.dailyReports}
                />

            </div>

            <AnalysisTable reports={dashboard.recentReports || []} />

        </section>

    );

}

export default Dashboard;