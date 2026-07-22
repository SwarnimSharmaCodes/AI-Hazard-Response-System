import {
    FaChartPie,
    FaFlask,
    FaFileAlt,
    FaInfoCircle,
    FaSignOutAlt,
    FaShieldAlt,
} from "react-icons/fa";

import { NavLink, useLocation } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import "./sidebar.css";

function Sidebar({ isSidebarOpen, setIsSidebarOpen }) {

    const { logout } = useAuth();
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
    setIsSidebarOpen(false);
}, [location.pathname, setIsSidebarOpen]);

    return (

        <>
            {isSidebarOpen && (
                <div
                    className="sidebar-overlay"
                    onClick={() => setIsSidebarOpen(false)}
                />
            )}

            <aside
                className={`sidebar ${isSidebarOpen ? "sidebar-open" : ""
                    }`}
            >

            <div className="sidebar-logo">

                <FaShieldAlt />

                <div>

                    <h2>Sentra</h2>

                    <p>Smart Industrial Hazard Detection</p>

                </div>

            </div>

            <nav>

                <NavLink to="/dashboard">
                    <FaChartPie />
                    Dashboard
                </NavLink>

                <NavLink to="/simulation">
                    <FaFlask />
                    Simulation
                </NavLink>

                <NavLink to="/reports">
                    <FaFileAlt />
                    Reports
                </NavLink>

                <NavLink to="/about">
                    <FaInfoCircle />
                    About
                </NavLink>

            </nav>

                <button
                    className="logout-button"
                    onClick={() => {
                        setIsSidebarOpen(false);
                        logout();
                        navigate("/");
                    }}
                >
                    <FaSignOutAlt />

                    Logout

                </button>

        </aside>
        </>

    );

}

export default Sidebar;