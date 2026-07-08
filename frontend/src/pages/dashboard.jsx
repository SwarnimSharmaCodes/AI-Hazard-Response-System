import dashboardData from "../data/dashboardData";
import DashboardCard from "../components/DashboardCard";
import HazardChart from "../components/HazardChart";
import "../styles/pages.css";

function Dashboard() {

    return (

        <section className="dashboard-page">

            <h1>Industrial Safety Dashboard</h1>

            <p>
                Live monitoring of industrial hazard analysis.
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

        <div className="charts-grid">

    <HazardChart />

</div>

        </section>

    );

}

export default Dashboard;