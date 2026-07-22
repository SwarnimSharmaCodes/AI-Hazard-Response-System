import { Link } from "react-router-dom";
import heroImage from "../../assets/hero.png";

import "./home.css";

function Hero() {
    return (
        <section className="hero">

            <div className="hero-content">

                <span className="hero-badge">
                    Industrial Safety Platform
                </span>

                <h1>
                    Sentra
                </h1>

                <h2>
                    Smart Industrial Hazard Detection
                </h2>

                <p>
                    Detect workplace hazards from industrial images,
                    generate detailed reports, and monitor safety
                    trends through one intelligent platform.
                </p>

                <div className="hero-buttons">

                    <Link
                        to="/simulation"
                        className="btn-primary"
                    >
                        Start Detection
                    </Link>

                    <Link
                        to="/dashboard"
                        className="btn-secondary"
                    >
                        View Dashboard
                    </Link>

                </div>

            </div>

            <div className="hero-image">

                <img
                    src={heroImage}
                    alt="Industrial Safety"
                />

            </div>

        </section>
    );
}

export default Hero;