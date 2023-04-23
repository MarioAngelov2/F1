import React, { useState } from "react";
import "../style/Footer.css";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";
import { Box, Button, Popover } from "@mui/material";
import { Link } from "react-router-dom";

const Footer = () => {
  const [copied, setCopied] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);

  const emailAdddress = "mario.angelov995@gmail.com";

  const copyToClipboard = () => {
    navigator.clipboard.writeText(emailAdddress);
    setCopied(true);
    setTimeout(() => setCopied(false, 3000));
  };

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
    console.log(event)
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : "undefined";

  return (
    <div className="footer-container">
      <div className="footer-info">
        <Box
          sx={{ display: "flex", alignItems: "center" }}
          className="icons-container"
        >
          <Button>
          <Link to={`https://github.com/MarioAngelov2`}>
            <GitHubIcon
              className="icon1"
              fontSize="large"
              sx={{ mr: 2, color: "white" }}
            />
          </Link>
          </Button>
          <Button
            onClick={(event) => {
              copyToClipboard();
              handleClick(event);
            }}
          >
            <EmailIcon className="icon2" fontSize="large" />
          </Button>
          <Popover
            
            id={id}
            open={open}
            anchorEl={anchorEl}
            onClose={handleClose}
            anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
          >
            The email is copied!
          </Popover>
        </Box>
        <span className="author">Author: Mario Angelov</span>
      </div>
    </div>
  );
};

export default Footer;
