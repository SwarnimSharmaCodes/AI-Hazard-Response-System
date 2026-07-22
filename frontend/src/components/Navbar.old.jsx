import { NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import "../styles/navbar.css";

function Navbar() {

    const { user, logout } = useAuth();

    const navigate = useNavigate();

    const handleLogout = () => {

        logout();

        navigate("/login");

    };

    return (

        <nav className="navbar">

            <div className="logo">
                🛡 Sentra
            </div>

            <div className="nav-links">

                <NavLink to="/">Home</NavLink>

                <NavLink to="/simulation">Simulation</NavLink>

                <NavLink to="/dashboard">Dashboard</NavLink>

                <NavLink to="/reports">Reports</NavLink>

                <NavLink to="/about">About</NavLink>

                {

                    user ? (

                        <>

                            <span className="user-name">
                                Hi, {user.name}
                            </span>

                            <button
                                className="logout-btn"
                                onClick={handleLogout}
                            >
                                Logout
                            </button>

                        </>

                    ) : (

                        <>

                            <NavLink to="/login">Login</NavLink>

                            <NavLink to="/signup">Signup</NavLink>

                        </>

                    )

                }

            </div>

        </nav>

    );

}

export default Navbar;