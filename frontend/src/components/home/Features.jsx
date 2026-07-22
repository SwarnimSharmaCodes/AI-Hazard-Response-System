import {
    ShieldAlert,
    BarChart3,
    FileText,
    Zap
} from "lucide-react";

import "./home.css";

const features = [
    {
        icon: ShieldAlert,
        title: "Hazard Detection",
        description:
            "Detect industrial hazards from uploaded workplace images with intelligent analysis."
    },
    {
        icon: BarChart3,
        title: "Analytics Dashboard",
        description:
            "Track incidents, hazard trends, and workplace safety metrics from one dashboard."
    },
    {
        icon: FileText,
        title: "Smart Reports",
        description:
            "Generate structured reports with severity, confidence, and recommended actions."
    },
    {
        icon: Zap,
        title: "Fast Response",
        description:
            "Help safety teams respond quickly with organized incident information."
    }
];

function Features() {
    return (
        <section className="features">

            <div className="section-heading">

                <span>
                    FEATURES
                </span>

                <h2>
                    Everything You Need For Industrial Safety
                </h2>

                <p>
                    Sentra centralizes hazard detection,
                    reporting and monitoring into one
                    easy-to-use platform.
                </p>

            </div>

            <div className="feature-grid">

                {features.map((feature, index) => {

                    const Icon = feature.icon;

                    return (

                        <div
                            className="feature-card"
                            key={index}
                        >

                            <div className="feature-icon">

                                <Icon size={34} />

                            </div>

                            <h3>
                                {feature.title}
                            </h3>

                            <p>
                                {feature.description}
                            </p>

                        </div>

                    );

                })}

            </div>

        </section>
    );
}

export default Features;