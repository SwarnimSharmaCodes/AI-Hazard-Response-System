import { useState } from "react";
import hazards from "../data/hazards";
import HazardCard from "../components/HazardCard";
import "../styles/pages.css";
import { Link } from "react-router-dom";

function Home() {

  const [platformName] = useState("Sentra");

  return (
    <div className="home">

      <section className="hero">

        <h1>{platformName}</h1>

        <p>
          Industrial Hazard Intelligence Platform for
          Detection, Response and Safety Management.
        </p>

        <div className="hero-buttons">

          <Link to="/simulation">
            <button className="primary-btn">
              Start Simulation
            </button>
          </Link>

          <Link to="/dashboard">
            <button className="secondary-btn">
              View Dashboard
            </button>
          </Link>

        </div>

      </section>

      <section className="hazards-section">

        <h2>Supported Hazard Types</h2>

        <div className="hazard-grid">

          {hazards.map((hazard) => (

            <HazardCard
              key={hazard.id}
              hazard={hazard}
            />

          ))}

        </div>

      </section>

    </div>
  );
}

export default Home;