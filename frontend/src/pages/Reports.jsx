import { useEffect, useState } from "react";
import axios from "axios";
import DashboardCard from "../components/DashboardCard";
import ReportTable from "../components/ReportTable";
import "../styles/pages.css";

function Reports() {

    const [reports, setReports] = useState([]);
    useEffect(() => {

        fetchReports();

    }, []);

    const fetchReports = async () => {

    try {

        const response = await axios.get(
            "http://localhost:5000/api/reports"
        );

        setReports(response.data);

    } catch (error) {

        console.error(error);

    }

};
    return (

        <section className="reports-page">

            <h1>Industrial Safety Reports</h1>

            <p>

                View all hazard analysis reports.

            </p>

            <div className="dashboard-grid">

                <DashboardCard
                    title="Total Analyses"
                    value={reports.length}
                    color="blue"
                />

                <DashboardCard
                    title="Fire Hazards"
                    value={reports.filter(report => report.hazardType === "Fire Hazard").length}
                    color="red"
                />

                <DashboardCard
                    title="High Severity"
                    value={reports.filter(report => report.severity === "High").length}
                    color="orange"
                />

                <DashboardCard
                    title="AI Accuracy"
                    value="96%"
                    color="green"
                />

            </div>

            <ReportTable reports={reports} />

        </section>

    );

}

export default Reports;