import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDriversData } from "../../hooks/useDriversData";

const Driver = () => {
  const [driver, setDriver] = useState({});

  const { id } = useParams();
  const driverListApiData = useDriversData();
  // const selectedDriver = driverListApiData.find((driverData) => {
  //   return driverData.id === id;
  // });

  useEffect(() => {
    const selectedDriver = driverListApiData.find(data => {
      return data.id === id
    })
    setDriver(selectedDriver)
  }, [])

 console.log(driver)
  return (
    <div className="main-driver-container">
      <div className="driver-container">
        <div className="driverImg-container">
          {/* <img src={selectedDriver.driverProfileImg} /> */}
        </div>
        <div className="stats"></div>
      </div>
    </div>
  );
};

export default Driver;
