import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { getCurrentSeason } from "../../services/reqester";
import DateTime from "../../utils/DateTimeFormatter";

import "../../style/Races.css";

const RacesData = () => {
  const raceInfoQuery = useQuery(["raceInfo"], getCurrentSeason);
  const isLoading = raceInfoQuery.isLoading;
  const isError = raceInfoQuery.isError;

  if (isError) {
    return <div>Error Fetching Data</div>;
  }

  if (isLoading) {
    return <div>Loading...</div>;
  }

  const raceInfo = Object.values(raceInfoQuery.data.MRData.RaceTable.Races);

  return raceInfo.map((race) => (
    <tr key={race.round}>
      <td data-cell="round" className="race-round">
        {race.round}
      </td>
      <td data-cell="country" className="country-flag">
        {race.Circuit.Location.locality}, {race.Circuit.Location.country}
      </td>
      <td data-cell="grand-prix" className="grand-prix">
        {race.raceName}
      </td>
      <td data-cell="qualifying" className="qualy-info">
        <DateTime date={race.Qualifying.date} time={race.Qualifying.time} />
      </td>
      <td data-cell="race" className="race-info">
        <DateTime date={race.date} time={race.time} />
      </td>
      <td data-cell="circuit" className="curcuit-name">
        {race.Circuit.circuitName}
      </td>
    </tr>
  ));
};

export default RacesData;
