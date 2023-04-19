import React from "react";
import DriverListData from "./DriverListData";
import { motion } from "framer-motion";

import "../../style/Drivers.css";

const DriverList = () => {
  return (
    <motion.div
      initial={{ y: "100%" }}
      animate={{ y: "0" }}
      transition={{ duration: 0.5, ease: "easeOut"}}
      exit={{ opacity: 0 }}
    >
      <div className="drivers-container">
        <div className="title">
          <h1>F1 DRIVERS 2023</h1>
        </div>
        <div className="micro-text">
          <p>
            Check out this season's official F1 line-up. Full breakdown of
            drivers, points and current positions. Follow your favourite F1
            drivers on and off the track.
          </p>
        </div>
        <motion.div animate={{x: 0}} initial={{ x: "200%"}} transition={{delay: 0.5, duration: 0.5}} className="drivers-row">
          <DriverListData />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default DriverList;
