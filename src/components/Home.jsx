import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import carImg from "../assets/Haas.jpeg";
import "../style/Home.css";
import { motion } from "framer-motion";
import ArrowForwardIosOutlinedIcon from "@mui/icons-material/ArrowForwardIosOutlined";
import { Button } from "@mui/material";

const Home = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      exit={{ opacity: 0 }}
      className="home-container"
    >
      <motion.div
        animate={{ y: 0 }}
        initial={{ y: "-100%" }}
        transition={{ duration: 0.8 }}
        className="header-title"
      >
        <h1>The Power Behind the Podium: Meet the Leading F1 Teams</h1>
      </motion.div>
      <motion.div animate={{ y: 0 }}
        initial={{ y: "100%" }}
        transition={{ duration: 0.8 }} className="img-container">
        <img src={carImg} />
      </motion.div>
      <motion.div
        animate={{ x: 0 }}
        initial={{ x: "100%" }}
        transition={{ duration: 0.4, delay: 0.5 }}
        className="btn"
      >
        <span>Check out the current driver lineup</span>
        <Button onClick={() => navigate("/drivers")}>
          <ArrowForwardIosOutlinedIcon className="arrow-btn"></ArrowForwardIosOutlinedIcon>
        </Button>
      </motion.div>
    </motion.div>
  );
};

export default Home;
