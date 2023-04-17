import React from "react";
import { Link } from "react-router-dom";
import F1Logo from "../assets/F1-LOGO.png";
import "../style/Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar-container">
      <div className="f1-logo">
        <Link to="/home">
          <img src={F1Logo} alt="F1 Logo" />
        </Link>
      </div>
      <div className="links">
        <Link to="/races">Race Schedule</Link>
        <Link to="/driver-standings">Driver Standings</Link>
        <Link to="/constructor-standings">Constructor Standings</Link>
        <Link to="/teams">Teams</Link>
        <Link to="/drivers">Drivers</Link>
      </div>
    </div>
  );
};

export default Navbar;
