import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "./components/Layout";

import Home from "./pages/Home";
import Simulation from "./pages/Simulation";
import Dashboard from "./pages/Dashboard";
import Reports from "./pages/Reports";
import About from "./pages/About";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path = "/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path = "simulation" element={<Simulation />} />
          <Route path = "dashboard" element={<Dashboard />} />
          <Route path = "reports" element={<Reports />} />
          <Route path = "about" element={<About />} />
        </Route>
        <Route path = "*" element={<NotFound />} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;
