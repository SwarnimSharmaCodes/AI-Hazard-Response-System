import { HiOutlineMenu } from "react-icons/hi";
import { useAuth } from "../../context/AuthContext";
import { Link } from "react-router-dom";

import "./topbar.css";

function Topbar({ setIsSidebarOpen }) {

    const { user, logout } = useAuth();
    const handleMenuClick = () => {
        setIsSidebarOpen(prev => !prev);
    };

    return (

        <header className="topbar">

            <div className="topbar-left">

                <button
                    className="menu-btn"
                    onClick={handleMenuClick}
                >
                    <HiOutlineMenu />
                </button>

                <div>

                    <h2>Sentra</h2>

                    <p>Smart Industrial Hazard Detection</p>

                </div>

            </div>

            <div className="topbar-right">

                {user ? (

                    <>
                        <span className="welcome-user">
                            Hi, {user.name} 👋
                        </span>

                        <button
                            className="logout-topbar"
                            onClick={logout}
                        >
                            Logout
                        </button>
                    </>

                ) : (

                    <>
                        <Link
                            className="topbar-link"
                            to="/login"
                        >
                            Login
                        </Link>

                        <Link
                            className="btn-primary"
                            to="/signup"
                        >
                            Sign Up
                        </Link>
                    </>

                )}

            </div>

        </header>

    );

}

export default Topbar;