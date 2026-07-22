import {
    FileCheck2,
    TriangleAlert,
    Target,
    Factory
} from "lucide-react";

import "./home.css";

const stats = [
    {
        icon: FileCheck2,
        number: "120+",
        title: "Reports Generated"
    },
    {
        icon: TriangleAlert,
        number: "18",
        title: "Critical Alerts"
    },
    {
        icon: Target,
        number: "94%",
        title: "Detection Accuracy"
    },
    {
        icon: Factory,
        number: "24",
        title: "Industrial Sites"
    }
];

function Stats() {

    return (

        <section className="stats">

            <div className="section-heading">

                <span>PROJECT IMPACT</span>

                <h2>
                    Industrial Safety at a Glance
                </h2>

                <p>
                    Monitor key performance indicators that help
                    organizations maintain safer workplaces.
                </p>

            </div>

            <div className="stats-grid">

                {stats.map((item, index) => {

                    const Icon = item.icon;

                    return (

                        <div
                            key={index}
                            className="stat-card"
                        >

                            <Icon
                                size={36}
                                className="stat-icon"
                            />

                            <h3>{item.number}</h3>

                            <p>{item.title}</p>

                        </div>

                    );

                })}

            </div>

        </section>

    );

}

export default Stats;