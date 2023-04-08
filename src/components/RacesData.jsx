import React, { useEffect, useState } from "react";
import { getCurrentSeason } from "../services/reqester";
import { DateTime } from "../utils/DateTimeFormatter";

import "../style/Races.css";
import { BeatLoader } from "react-spinners";

const RacesData = () => {
  const [raceInfo, setRaceInfo] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  // const data = raceInfo.map(x => {
  //   console.log(x.Qualifying.time )
  // })

  useEffect(() => {
    getCurrentSeason().then((result) => {
      setRaceInfo(Object.values(result.MRData.RaceTable.Races));
      setIsLoading(false);
    });
  }, []);

  if (isLoading) {
    <tr key="loading-spinner">
      <td colSpan={5}>
        <BeatLoader size={10} color="#3b3b3b" loading={setIsLoading} />
      </td>
    </tr>;
  }

  return raceInfo.map((race) => (
    <tr key={race.round}>
      <td className="race-round">{race.round}</td>
      <td className="country-flag">
        {race.Circuit.Location.locality}, {race.Circuit.Location.country}
      </td>
      <td className="grand-prix">{race.raceName}</td>
      <td className="qualy-info">
        <DateTime date={race.Qualifying.date} time={race.Qualifying.time} />
      </td>
      <td className="race-info">
        <DateTime date={race.date} time={race.time} />
      </td>
      <td className="curcuit-name">{race.Circuit.circuitName}</td>
    </tr>
  ));
};

export default RacesData;
