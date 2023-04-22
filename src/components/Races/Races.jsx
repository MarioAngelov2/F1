import { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { getDriversStandings } from "../../services/reqester";
import RacesData from "./RacesData";

import { motion } from "framer-motion";
import "../../style/Races.css";

const Races = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const driverStandingsQuery = useQuery(
    ["driverStandings"],
    getDriversStandings
  );
  const isLoading = driverStandingsQuery.isLoading;
  const isError = driverStandingsQuery.isError;

  // handle error state
  if (isError) {
    return <div>Error Fetching Data</div>;
  }

  // handle loading state
  if (isLoading) {
    return <div>Loading...</div>;
  }

  // fetch data about current season
  const raceInfo = Object.values(
    driverStandingsQuery.data.MRData.StandingsTable.StandingsLists
  );

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.75, ease: "easeOut" }}
      exit={{ opacity: 0 }}
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
                  <th >Race</th>
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
