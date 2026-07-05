function HazardCard({ hazard }) {

  return (

    <div className="hazard-card">

      <div className="hazard-icon">

        {hazard.icon}

      </div>

      <h3>

        {hazard.title}

      </h3>

      <p>

        {hazard.description}

      </p>

    </div>

  );

}

export default HazardCard;