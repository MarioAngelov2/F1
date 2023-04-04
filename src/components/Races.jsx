import React from "react";
import { useState, useEffect } from "react";
import { getCurrentSeason, getAllSeasons } from "../services/reqester";
import { DateTime } from "../utils/dateTimeFormatter";

import "../style/Races.css";

const Races = () => {
  const [raceInfo, setRaceInfo] = useState([]);
  const [allSeasons, setAllSeasons] = useState([]);
  console.log(allSeasons);

  useEffect(() => {
    getAllSeasons().then((res) => {
      setAllSeasons(res);
    });
    getCurrentSeason().then((result) => {
      setRaceInfo(Object.values(result.MRData.RaceTable.Races));
    });
  }, []);

  return (
    <div className="races-container">
      <main className="main">
        <div className="main-content">
          <h1>Season 2023</h1>
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
              {raceInfo.map((race) => (
                <tr key={race.round}>
                  <td className="race-round">{race.round}</td>
                  <td className="country-flag">
                    {race.Circuit.Location.locality},{" "}
                    {race.Circuit.Location.country}
                  </td>
                  <td className="grand-prix">{race.raceName}</td>
                  <td className="qualy-info">
                    <DateTime
                      date={race.Qualifying.date}
                      time={race.Qualifying.time}
                    />
                  </td>
                  <td className="race-info">
                    <DateTime date={race.date} time={race.time} />
                  </td>
                  <td className="curcuit-name">{race.Circuit.circuitName}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
};

export default Races;
