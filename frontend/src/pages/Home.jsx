import { useState } from "react";
import hazards from "../data/hazards";
import HazardCard from "../components/HazardCard";
import "../styles/pages.css";

function Home() {

  const [platformName] = useState("AI Hazard Response System");

  return (
    <div className="home">

      <section className="hero">

        <h1>{platformName}</h1>

        <p>
          AI-powered Industrial Hazard Detection,
          Simulation and Emergency Response Platform.
        </p>

        <div className="hero-buttons">

          <button className="primary-btn">
            Start Simulation
          </button>

          <button className="secondary-btn">
            View Dashboard
          </button>

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