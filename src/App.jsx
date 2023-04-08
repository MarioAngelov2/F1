import "./App.css";
import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Races from "./components/Races";
import DriverStandings from "./components/DriverStandings";
import Home from "./components/Home";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/races" element={<Races />} />
        <Route path="/driver-standings" element={<DriverStandings />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
