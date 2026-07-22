import { Outlet } from "react-router-dom";
import { useState } from "react";

import Sidebar from "./Sidebar";
import Topbar from "./Topbar";

import "./layout.css";

function Layout() {

    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    return (

        <div className="app-layout">

            <Sidebar

                isSidebarOpen={isSidebarOpen}

                setIsSidebarOpen={setIsSidebarOpen}

            />

            <div
                className={`content-wrapper ${isSidebarOpen ? "content-shift" : ""
                    }`}
            >

                <Topbar

                    setIsSidebarOpen={setIsSidebarOpen}

                />

                <main className="page-content">

                    <Outlet />

                </main>

            </div>

        </div>

    );

}

export default Layout;