import "../styles/pages.css";

function About() {

    return (

        <section className="about-page">

            <h1>About The Project</h1>

            <p>

                AI-Powered Industrial Hazard Response & Safety Simulation System
                is a full-stack web application designed to help identify
                industrial hazards from uploaded images and provide
                safety recommendations.

            </p>

            <h2>Key Features</h2>

            <ul>

                <li>Image Upload</li>

                <li>Hazard Detection</li>

                <li>Safety Recommendations</li>

                <li>Industrial Dashboard</li>

                <li>Report Generation</li>

                <li>CSV & PDF Export</li>

            </ul>

            <h2>Technology Stack</h2>

            <ul>

                <li>React.js</li>

                <li>Express.js</li>

                <li>Node.js</li>

                <li>Axios</li>

                <li>Multer</li>

                <li>Recharts</li>

            </ul>

        </section>

    );

}

export default About;