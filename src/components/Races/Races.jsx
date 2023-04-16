import React from "react";
import { useState, useEffect } from "react";
import { getDriversStandings } from "../../services/reqester";
import RacesData from "./RacesData";

import { motion } from "framer-motion";
import "../../style/Races.css";

const Races = () => {
  const [raceInfo, setRaceInfo] = useState([]);

  // fetch data about current season
  useEffect(() => {
    getDriversStandings().then((result) => {
      setRaceInfo(Object.values(result.MRData.StandingsTable.StandingsLists));
    });
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="races-container">
        <main className="main">
          <div className="main-content">
            <div className="race-title-container">
              {raceInfo.map((data) => (
                <div key={data.season} className="race-title">
                  <h2>{data.season} Race Calendar</h2>
                </div>
              ))}
            </div>
            <table>
              <thead>
                <tr>
                  <th>Round</th>
                  <th>Country</th>
                  <th>Grand Prix</th>
                  <th>Qualifying</th>
                  <th>Race</th>
                  <th>Circuit</th>
                </tr>
              </thead>
              <tbody>
                <RacesData />
              </tbody>
            </table>
          </div>
        </main>
      </div>
    </motion.div>
  );
};

export default Races;
