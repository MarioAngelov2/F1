import { useState, useEffect } from "react";
import { getDriversStandings } from "../../services/reqester";
import { useDriversData } from "../../hooks/useDriversData";

const DriverListData = () => {
  const driverListApiData = useDriversData();

  return (
    <>
      {driverListApiData.map((driver) => (
        <div key={driver.id} className="main-container">
          <div className="listing-container">
            <div className="listing-item">
              <div className="card-header">
                <div className="rank">{driver.position}</div>
                <div className="points">
                  <div className="driver-pts">{driver.points}</div>
                  <div className="pts-logo">Pts</div>
                </div>
              </div>
              <div className="card-info">
                <div className="driver-headerInfo">
                  <div className="driver">
                    {driver.firstName} {driver.lastName}
                  </div>
                  <div className="nationality-img">
                    <img src={driver.nationImg} />
                  </div>
                </div>
                <div>
                  <p>{driver.team}</p>
                </div>
                <div className="driver-img">
                  <div className="racing-num">
                    <img src={driver.racingNumber} />
                  </div>
                  <div className="driver">
                    <img src={driver.driverImg} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default DriverListData;
