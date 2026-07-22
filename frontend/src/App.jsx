import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Home from "./pages/Home";
import Simulation from "./pages/Simulation";
import Dashboard from "./pages/Dashboard";
import Reports from "./pages/Reports";
import About from "./pages/About";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <BrowserRouter>

    <Routes>

        {/* Public Pages */}

        <Route path="/" element={<Layout />}>

            <Route index element={<Home />} />

            <Route path="simulation" element={<Simulation />} />

            <Route path="dashboard" element={<Dashboard />} />

            <Route path="reports" element={<Reports />} />

            <Route path="about" element={<About />} />

        </Route>

        {/* Authentication */}

        <Route path="/login" element={<Login />} />

        <Route path="/signup" element={<Signup />} />

        <Route path="*" element={<NotFound />} />

    </Routes>

</BrowserRouter>
  );
}

export default App;
