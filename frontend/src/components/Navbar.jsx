import { NavLink } from "react-router-dom";
import "../styles/navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        AI Hazard Response
      </div>

      <ul className="nav-links">

        <li>
          <NavLink to="/">Home</NavLink>
        </li>

        <li>
          <NavLink to="/simulation">Simulation</NavLink>
        </li>

        <li>
          <NavLink to="/dashboard">Dashboard</NavLink>
        </li>

        <li>
          <NavLink to="/reports">Reports</NavLink>
        </li>

        <li>
          <NavLink to="/about">About</NavLink>
        </li>

      </ul>
    </nav>
  );
}

export default Navbar;