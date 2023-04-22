import { useState, useEffect } from "react";
import TeamListData from "./TeamListData";

import { motion } from "framer-motion";
import "../../style/Teams.css";

const TeamList = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      exit={{ opacity: 0 }}
    >
      <motion.div className="teams-container">
        <motion.div
          animate={{ y: 0 }}
          initial={{ y: "100%" }}
          transition={{ duration: 0.5 }}
          className="title"
        >
          <h1>F1 TEAMS 2023</h1>
        </motion.div>
        <motion.div
          animate={{ y: 0 }}
          initial={{ y: "100%" }}
          transition={{ duration: 0.5 }}
          className="micro-text"
        >
          <p>
            Discover everything you need to know about this year's Formula 1
            teams - drivers, podium finishes, points earned and championship
            titles.
          </p>
        </motion.div>
        <motion.div
          animate={{ y: 0 }}
          initial={{ y: "100%" }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="row"
        >
          <TeamListData />
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default TeamList;
