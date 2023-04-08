import React from "react";
import { useState, useEffect } from "react";
import { getDriversStandings } from "../services/reqester";

import "../style/DriverStandings.css";
import { BeatLoader } from "react-spinners";

const DriverStandingsData = () => {
  const [driverInfo, setDriverInfo] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getDriversStandings().then((result) => {
      setDriverInfo(Object.values(result.MRData.StandingsTable.StandingsLists));
      setIsLoading(false);
    });
  }, []);

  if (isLoading) {
    return (
      <tr key="loading-spinner">
        <td colSpan={5}>
          <BeatLoader size={10} color="#3b3b3b" loading={setIsLoading} />
        </td>
      </tr>
    );
  }

  return driverInfo.map((driver) =>
    driver.DriverStandings.map((driver) => (
      <tr key={driver.Driver.driverId}>
        <td className="driver-position">{driver.position}</td>
        <td className="driver-name">
          {driver.Driver.givenName} {driver.Driver.familyName}
        </td>
        <td className="driver-nationality">{driver.Driver.nationality}</td>
        <td className="driver-car">{driver.Constructors[0].name}</td>
        <td className="driver-points">{driver.points}</td>
      </tr>
    ))
  );
};

export default DriverStandingsData;
