import React, { useState } from "react";
import { Link } from "react-router-dom";
import F1Logo from "../assets/F1-LOGO.png";
import "../style/Navbar.css";
import MenuIcon from "@mui/icons-material/Menu";
import { Button } from "@mui/material";

const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false);

  const closeMenu = () => {
    setShowLinks(false);
  };

  return (
    <div className="navbar-container">
      <div className="f1-logo">
        <Link to="/home">
          <img src={F1Logo} alt="F1 Logo" />
        </Link>
      </div>
      <div className="links" id={showLinks ? "hidden" : ""}>
        <Link onClick={closeMenu} to="/races">
          Race Schedule
        </Link>
        <Link onClick={closeMenu} to="/driver-standings">
          Driver Standings
        </Link>
        <Link onClick={closeMenu} to="/constructor-standings">
          Constructor Standings
        </Link>
        <Link onClick={closeMenu} to="/teams">
          Teams
        </Link>
        <Link onClick={closeMenu} to="/drivers">
          Drivers
        </Link>
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
