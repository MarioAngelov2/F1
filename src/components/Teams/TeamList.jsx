import { useState, useEffect } from "react";
import TeamListData from "./TeamListData";

import { motion } from "framer-motion";
import "../../style/Teams.css";

const TeamList = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="teams-container">
        <div className="title">
          <h1>F1 TEAMS 2023</h1>
        </div>
        <div className="micro-text">
          <p>
            Discover everything you need to know about this year's Formula 1
            teams - drivers, podium finishes, points earned and championship
            titles.
          </p>
        </div>
        <div className="row">
          <TeamListData />
        </div>
      </div>
    </motion.div>
  );
};

export default TeamList;
