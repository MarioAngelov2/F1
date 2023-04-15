import React from "react";
import { useState, useEffect } from "react";

import { getDriversStandings } from "../../services/reqester";
import DriverStandingsData from "./DriverStandingsData";
import { motion } from "framer-motion";

import "../../style/DriverStandings.css";

const DriverStandings = () => {
  const [driverInfo, setDriverInfo] = useState([]);

  //fetch data about the driver standings current season
  useEffect(() => {
    getDriversStandings().then((result) => {
      setDriverInfo(Object.values(result.MRData.StandingsTable.StandingsLists));
    });
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="driverStandings-container">
        <main>
          <div className="main-content">
            <div className="season-progress">
              {driverInfo.map((standingList) => (
                <React.Fragment key={standingList.season}>
                  <h3>Season {standingList.season}</h3>
                  <h4>Round {standingList.round}</h4>
                </React.Fragment>
              ))}
            </div>
            <table>
              <thead>
                <tr>
                  <th>Position</th>
                  <th>Driver</th>
                  <th>Nationality</th>
                  <th>Car</th>
                  <th>Pts</th>
                </tr>
              </thead>
              <tbody>
                <DriverStandingsData />
              </tbody>
            </table>
          </div>
        </main>
      </div>
    </motion.div>
  );
};

export default DriverStandings;
