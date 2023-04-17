import React from "react";
import DriverListData from "./DriverListData";
import { motion } from "framer-motion";

import "../../style/Drivers.css";

const DriverList = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
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
        <div className="drivers-row">
          <DriverListData />
        </div>
      </div>
    </motion.div>
  );
};

export default DriverList;
