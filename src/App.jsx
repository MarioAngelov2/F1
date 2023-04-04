import "./App.css";
import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Races from "./components/Races";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/races" element={<Races />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;