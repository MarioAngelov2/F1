import { useState, useEffect } from "react";
import { getDriversStandings } from "../../services/reqester";

const DriverListData = () => {
  const [driver, setDriver] = useState([]);

  useEffect(() => {
    getDriversStandings().then((result) => {
      setDriver(Object.values(result.MRData.StandingsTable.StandingsLists));
    });
  }, []);

  const driverList = [
    {
      id: "",
      position: "",
      points: "",
      team: "",
      racingNumber: "",
      firstName: "",
      lastName: "",
      nationImg: "",
      driverImg: "",
    },
  ];

  const driverListApiData = [];

  driverList.forEach((driverList) => {
    driver.forEach((driverData) => {
      if (driverData.DriverStandings) {
        driverData.DriverStandings.forEach((data) => {
          if (data.Driver.driverId === "max_verstappen") {
            driverListApiData.push({
              ...driverList,
              id: data.Driver.driverId,
              position: data.position,
              points: data.points,
              team: data.Constructors[0].name,
              firstName: data.Driver.givenName,
              lastName: data.Driver.familyName,
              racingNumber:
                "https://media.formula1.com/d_default_fallback_image.png/content/dam/fom-website/2018-redesign-assets/drivers/number-logos/MAXVER01.png.transform/2col-retina/image.png",
              nationImg:
                "https://media.formula1.com/d_default_fallback_image.png/content/dam/fom-website/flags/Netherlands.jpg.transform/2col-retina/image.jpg",
              driverImg:
                "https://media.formula1.com/d_driver_fallback_image.png/content/dam/fom-website/drivers/M/MAXVER01_Max_Verstappen/maxver01.png.transform/2col-retina/image.png",
            });
          }
         else if (data.Driver.driverId === "perez") {
            driverListApiData.push({
              ...driverList,
              id: data.Driver.driverId,
              position: data.position,
              points: data.points,
              team: data.Constructors[0].name,
              firstName: data.Driver.givenName,
              lastName: data.Driver.familyName,
              racingNumber:
                "https://media.formula1.com/d_default_fallback_image.png/content/dam/fom-website/2018-redesign-assets/drivers/number-logos/SERPER01.png.transform/2col-retina/image.png",
              nationImg:
                "https://media.formula1.com/d_default_fallback_image.png/content/dam/fom-website/flags/Mexico.jpg.transform/2col-retina/image.jpg",
              driverImg:
                "https://media.formula1.com/d_driver_fallback_image.png/content/dam/fom-website/drivers/S/SERPER01_Sergio_Perez/serper01.png.transform/2col-retina/image.png",
            });
          }
          else if (data.Driver.driverId === "alonso") {
            driverListApiData.push({
              ...driverList,
              id: data.Driver.driverId,
              position: data.position,
              points: data.points,
              team: data.Constructors[0].name,
              firstName: data.Driver.givenName,
              lastName: data.Driver.familyName,
              racingNumber:
                "https://media.formula1.com/d_default_fallback_image.png/content/dam/fom-website/2018-redesign-assets/drivers/number-logos/FERALO01.png.transform/2col-retina/image.png",
              nationImg:
                "https://media.formula1.com/d_default_fallback_image.png/content/dam/fom-website/flags/Spain.jpg.transform/2col-retina/image.jpg",
              driverImg:
                "https://media.formula1.com/d_driver_fallback_image.png/content/dam/fom-website/drivers/F/FERALO01_Fernando_Alonso/feralo01.png.transform/2col-retina/image.png",
            });
          }
          else if (data.Driver.driverId === "hamilton") {
            driverListApiData.push({
              ...driverList,
              id: data.Driver.driverId,
              position: data.position,
              points: data.points,
              team: data.Constructors[0].name,
              firstName: data.Driver.givenName,
              lastName: data.Driver.familyName,
              racingNumber:
                "https://media.formula1.com/d_default_fallback_image.png/content/dam/fom-website/2018-redesign-assets/drivers/number-logos/LEWHAM01.png.transform/2col-retina/image.png",
              nationImg:
                "https://media.formula1.com/d_default_fallback_image.png/content/dam/fom-website/flags/United%20Kingdom.jpg.transform/2col-retina/image.jpg",
              driverImg:
                "https://media.formula1.com/d_driver_fallback_image.png/content/dam/fom-website/drivers/L/LEWHAM01_Lewis_Hamilton/lewham01.png.transform/2col-retina/image.png",
            });
          }
        });
      }
    });
  });

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
