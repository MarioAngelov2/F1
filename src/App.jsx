import "./App.css";
import { Route, Routes, useLocation } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Races from "./components/Races/Races";
import DriverStandings from "./components/Drivers/DriverStandings";
import ConstructorsStandigs from "../src/components/Constructors/ConstructorsStandigs";
import TeamList from "./components/Teams/TeamList";
import DriverList from "./components/Drivers/DriverList";

import { QueryClientProvider, QueryClient } from "@tanstack/react-query";

import { AnimatePresence } from "framer-motion";

function App() {
  const location = useLocation();
  const queryCliend = new QueryClient();
  return (
    <QueryClientProvider client={queryCliend}>
      <div className="App">
        <Navbar />
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/races" element={<Races />} />
            <Route path="/driver-standings" element={<DriverStandings />} />
            <Route
              path="/constructor-standings"
              element={<ConstructorsStandigs />}
            />
            <Route path="/teams" element={<TeamList />} />
            <Route path="/drivers" element={<DriverList />} />
          </Routes>
        </AnimatePresence>
        <Footer />
      </div>
    </QueryClientProvider>
  );
}

export default App;
