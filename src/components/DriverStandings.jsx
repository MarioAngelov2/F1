import React from "react";
import { useState, useEffect } from "react";
import { getDriversStandings } from "../services/reqester";

import "../style/DriverStandings.css";

const DriverStandings = () => {
  const [driverInfo, setDriverInfo] = useState([]);
  // const data = driverInfo.map(dr => {
  //   dr.DriverStandings.map(x => {
  //     console.log(x.Constructors[0].name)
  //   })
  // })

  useEffect(() => {
    getDriversStandings().then((result) => {
      setDriverInfo(Object.values(result.MRData.StandingsTable.StandingsLists));
    });
  }, []);

  return (
    <div className="driverStandings-container">
      <main>
        <div className="main-content">
          <div className="season-progress">
            {driverInfo.map((standingList) => (
              <>
                <h3>Season {standingList.season}</h3>
                <h4>Round {standingList.round}</h4>
              </>
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
              {driverInfo.map((driver) =>
                driver.DriverStandings.map((driver, index) => (
                  <tr key={driver.Driver.driverId}>
                    <td className="driver-position">{driver.position}</td>
                    <td className="driver-name">
                      {driver.Driver.givenName} {driver.Driver.familyName}
                    </td>
                    <td className="driver-nationality">
                      {driver.Driver.nationality}
                    </td>
                    <td className="driver-car">
                      {driver.Constructors[0].name}
                    </td>
                    <td className="driver-points">{driver.points}</td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
};

export default DriverStandings;
