import { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { getDriversStandings } from "../../services/reqester";

import "../../style/DriverStandings.css";
import { BeatLoader } from "react-spinners";

const DriverStandingsData = () => {
  const driverInfoStandings = useQuery(
    ["driverStandingsInfo"],
    getDriversStandings
  );
  const isLoading = driverInfoStandings.isLoading;
  const isError = driverInfoStandings.isError;
  const isFetching = driverInfoStandings.isFetching;

  if (isError) {
    return <div>Error fetching data</div>;
  }

  if (isLoading) {
    return (
      <div className="loading-spinner">
        <BeatLoader size={10} color="#3b3b3b" />
      </div>
    );
  }

  const driverInfo = Object.values(
    driverInfoStandings.data.MRData.StandingsTable.StandingsLists
  );

  return driverInfo.map((driver) =>
    driver.DriverStandings.map((driver) => (
      <tr key={driver.Driver.driverId}>
        <td data-cell="position" className="driver-position">{driver.position}</td>
        <td data-cell="driver" className="driver-name">
          {driver.Driver.givenName} {driver.Driver.familyName}
        </td>
        <td data-cell="nationality" className="driver-nationality">{driver.Driver.nationality}</td>
        <td data-cell="car" className="driver-car">{driver.Constructors[0].name}</td>
        <td data-cell="pts" className="driver-points">{driver.points}</td>
      </tr>
    ))
  );
};

export default DriverStandingsData;
