import React, { useState } from "react";
import { Link } from "react-router-dom";
import F1Logo from "../assets/F1-LOGO.png";
import "../style/Navbar.css";
import MenuIcon from "@mui/icons-material/Menu";
import { Button } from "@mui/material";

const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false);

  return (
    <div className="navbar-container">
      <div className="links" id={showLinks ? "hidden" : ""}>
        <Link to="/races">Race Schedule</Link>
        <Link to="/driver-standings">Driver Standings</Link>
        <Link to="/constructor-standings">Constructor Standings</Link>
        <Link to="/teams">Teams</Link>
        <Link to="/drivers">Drivers</Link>
      </div>
      <Button
        className="hamburger-btn"
        onClick={() => setShowLinks(!showLinks)}
      >
        <MenuIcon fontSize="large" className="hamburger-icon" />
      </Button>
    </div>
  );
};

export default Navbar;

<div className="f1-logo">
  <Link to="/home">
    <img src={F1Logo} alt="F1 Logo" />
  </Link>
</div>;
