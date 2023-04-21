import { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { getConstructorStandings } from "../../services/reqester";

const ConstructorsStandigsData = () => {
  const constructorStandingsInfo = useQuery(
    ["constructorStandings"],
    getConstructorStandings
  );

  const isLoading = constructorStandingsInfo.isLoading;
  const isError = constructorStandingsInfo.isError;

  if (isError) {
    return <div>Error</div>;
  }

  if (isLoading) {
    return <div>Loading...</div>;
  }

  const constructorinfo = Object.values(
    constructorStandingsInfo.data.MRData.StandingsTable.StandingsLists
  );

  return constructorinfo.map((constructor) =>
    constructor.ConstructorStandings.map((constructor) => (
      <tr key={constructor.Constructor.constructorId}>
        <td data-cell="position" className="constructor-pos">{constructor.position}</td>
        <td data-cell="constructor" className="constructor-name">{constructor.Constructor.name}</td>
        <td data-cell="nationality" className="constructor-nationality">
          {constructor.Constructor.nationality}
        </td>
        <td data-cell="points" className="constructor-pts">{constructor.points}</td>
        <td data-cell="wins" className="constructor-wins">{constructor.wins}</td>
      </tr>
    ))
  );
};

export default ConstructorsStandigsData;
