import React from "react";
import "../style/Footer.css";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";
import { Box } from "@mui/material";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-info">
        <Box
          sx={{ display: "flex", alignItems: "center" }}
          className="icons-container"
        >
          <Link to={`https://github.com/MarioAngelov2`}>
            <GitHubIcon fontSize="large" sx={{ mr: 2, color: "white" }} />
          </Link>
          <EmailIcon fontSize="large" />
        </Box>
        <span className="author">Author: Mario Angelov</span>
      </div>
    </div>
  );
};

export default Footer;
