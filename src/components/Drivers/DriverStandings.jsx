import React from "react";
import { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";

import { getDriversStandings } from "../../services/reqester";
import DriverStandingsData from "./DriverStandingsData";
import { motion } from "framer-motion";

import "../../style/DriverStandings.css";

const DriverStandings = () => {
  // const [driverInfo, setDriverInfo] = useState([]);
  const driverStandingsInfo = useQuery(["driverStandingsInfo"], getDriversStandings);
  const isLoading = driverStandingsInfo.isLoading;
  const isError = driverStandingsInfo.isError;

  if (isError) {
    return <div>Error Fetching Data</div>
  }

  if (isLoading) {
    return <div>Loading...</div>
  }
  
  const driverInfo = Object.values(driverStandingsInfo.data.MRData.StandingsTable.StandingsLists)

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      exit={{ opacity: 0 }}
    >
      <div className="driverStandings-container">
        <main>
          <div className="main-content">
            <div className="driver-progress">
              {driverInfo.map((standingList) => (
                <div key={standingList.season} className="drivers-title">
                  <h2>{standingList.season} Driver Standings</h2>
                </div>
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
