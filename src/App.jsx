import "./App.css";
import { Route, Routes, useLocation } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Races from "./components/Races";
import DriverStandings from "./components/DriverStandings";
import Home from "./components/Home";

import { AnimatePresence } from "framer-motion";

function App() {
  const location = useLocation();

  return (
    <div className="App"> 
      <Navbar />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/home" element={<Home />} />
          <Route path="/races" element={<Races />} />
          <Route path="/driver-standings" element={<DriverStandings />} />
        </Routes>
      </AnimatePresence>
      <Footer />
    </div>
  );
}

export default App;
