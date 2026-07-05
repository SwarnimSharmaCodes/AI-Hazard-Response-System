import { NavLink } from "react-router-dom";
import "../styles/navbar.css";

function Navbar() {
  return (
    <nav className="navbar">

      <div className="logo">
        🛡 AI Hazard Response
      </div>

      <div className="nav-links">

        <NavLink to="/">Home</NavLink>

        <NavLink to="/simulation">Simulation</NavLink>

        <NavLink to="/dashboard">Dashboard</NavLink>

        <NavLink to="/reports">Reports</NavLink>

        <NavLink to="/about">About</NavLink>

      </div>

    </nav>
  );
}

export default Navbar;