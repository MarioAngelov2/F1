import { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import ConstructorsStandigsData from "./ConstructorsStandigsData";
import { getConstructorStandings } from "../../services/reqester";

import { motion } from "framer-motion";
import "../../style/ConstructorStandings.css";

const ConstructorsStandigs = () => {
  const constructorStandingsInfo = useQuery(
    ["constructorStandingsInfo"],
    getConstructorStandings
  );

  const isLoading = constructorStandingsInfo.isLoading;
  const isError = constructorStandingsInfo.isError;

  if (isError) {
    return <div>Error</div>
  }

  if (isLoading) {
    return <div>Loading...</div>
  }

  const constructorData = Object.values(constructorStandingsInfo.data.MRData.StandingsTable.StandingsLists)

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="constructorStandings-container">
        <main>
          <div className="main-content">
            <div className="constructor-progress">
              {constructorData.map((constructor) => (
                <div key={constructor.round} className="constructor-title">
                  <h2>{constructor.season} Constructor Standings</h2>
                </div>
              ))}
            </div>
            <table>
              <thead>
                <tr>
                  <th>Position</th>
                  <th>Constructor</th>
                  <th>Nationality</th>
                  <th>Points</th>
                  <th>Wins</th>
                </tr>
              </thead>
              <tbody>
                <ConstructorsStandigsData />
              </tbody>
            </table>
          </div>
        </main>
      </div>
    </motion.div>
  );
};

export default ConstructorsStandigs;
