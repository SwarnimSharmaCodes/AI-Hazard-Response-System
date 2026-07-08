import dashboardData from "../data/dashboardData";
import DashboardCard from "../components/DashboardCard";
import ReportTable from "../components/ReportTable";
import "../styles/pages.css";

function Reports() {

    return (

        <section className="reports-page">

            <h1>Industrial Safety Reports</h1>

            <p>

                View all hazard analysis reports.

            </p>

            <div className="dashboard-grid">

                {

                    dashboardData.map((item) => (

                        <DashboardCard

                            key={item.id}

                            title={item.title}

                            value={item.value}

                            color={item.color}

                        />

                    ))

                }

            </div>

            <ReportTable />

        </section>

    );

}

export default Reports;