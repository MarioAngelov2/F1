import { useState, useEffect } from "react";
import { getConstructorStandings } from "../services/reqester";

export const useTeamListData = () => {
  const [constructor, setConstructor] = useState([]);

  useEffect(() => {
    getConstructorStandings().then((result) => {
      setConstructor(
        Object.values(result.MRData.StandingsTable.StandingsLists)
      );
    });
  }, []);

  const teamList = [
    {
      id: "",
      teamPosition: "",
      teamPoints: "",
      teamName: "",
      teamLogo: "",
      firstDriver: "",
      secondDriver: "",
      carImage: "",
    },
  ];

  const teamListApiData = [];

  teamList.forEach((team) => {
    constructor.forEach((constructor) => {
      if (constructor.ConstructorStandings) {
        constructor.ConstructorStandings.forEach((data) => {
          if (data.Constructor.constructorId === "red_bull") {
            teamListApiData.push({
              ...teamList,
              id: data.Constructor.constructorId,
              teamPosition: data.position,
              teamPoints: data.points,
              teamName: data.Constructor.name,
              teamLogo:
                "https://media.formula1.com/content/dam/fom-website/teams/2023/red-bull-racing-logo.png.transform/2col-retina/image.png",
              firstDriver: "Max Verstappen",
              secondDriver: "Sergio Perez",
              carImage:
                "https://media.formula1.com/d_team_car_fallback_image.png/content/dam/fom-website/teams/2023/red-bull-racing.png.transform/3col-retina/image.png",
            });
          } else if (data.Constructor.constructorId === "aston_martin") {
            teamListApiData.push({
              ...teamList,
              id: data.Constructor.constructorId,
              teamPosition: data.position,
              teamPoints: data.points,
              teamName: data.Constructor.name,
              teamLogo:
                "https://media.formula1.com/content/dam/fom-website/teams/2023/aston-martin-logo.png.transform/2col-retina/image.png",
              firstDriver: "Fernando Alonso",
              secondDriver: "Lance Stroll",
              carImage:
                "https://media.formula1.com/d_team_car_fallback_image.png/content/dam/fom-website/teams/2023/aston-martin.png.transform/6col-retina/image.png",
            });
          } else if (data.Constructor.constructorId === "mercedes") {
            teamListApiData.push({
              ...teamList,
              id: data.Constructor.constructorId,
              teamPosition: data.position,
              teamPoints: data.points,
              teamName: data.Constructor.name,
              teamLogo:
                "https://media.formula1.com/content/dam/fom-website/teams/2023/mercedes-logo.png.transform/2col-retina/image.pngg",
              firstDriver: "Lewis Hamilton",
              secondDriver: "George Rusell",
              carImage:
                "https://media.formula1.com/d_team_car_fallback_image.png/content/dam/fom-website/teams/2023/mercedes.png.transform/6col-retina/image.png",
            });
          } else if (data.Constructor.constructorId === "ferrari") {
            teamListApiData.push({
              ...teamList,
              id: data.Constructor.constructorId,
              teamPosition: data.position,
              teamPoints: data.points,
              teamName: data.Constructor.name,
              teamLogo:
                "https://media.formula1.com/content/dam/fom-website/teams/2023/ferrari-logo.png.transform/2col-retina/image.png",
              firstDriver: "Charles Leclerc",
              secondDriver: "Carlos Sainz",
              carImage:
                "https://media.formula1.com/d_team_car_fallback_image.png/content/dam/fom-website/teams/2023/ferrari.png.transform/6col-retina/image.png",
            });
          } else if (data.Constructor.constructorId === "mclaren") {
            teamListApiData.push({
              ...teamList,
              id: data.Constructor.constructorId,
              teamPosition: data.position,
              teamPoints: data.points,
              teamName: data.Constructor.name,
              teamLogo:
                "https://media.formula1.com/content/dam/fom-website/teams/2023/mclaren-logo.png.transform/2col-retina/image.png",
              firstDriver: "Lando Norris",
              secondDriver: "Oscar Piastri",
              carImage:
                "https://media.formula1.com/d_team_car_fallback_image.png/content/dam/fom-website/teams/2023/mclaren.png.transform/6col-retina/image.png",
            });
          } else if (data.Constructor.constructorId === "alpine") {
            teamListApiData.push({
              ...teamList,
              id: data.Constructor.constructorId,
              teamPosition: data.position,
              teamPoints: data.points,
              teamName: data.Constructor.name,
              teamLogo:
                "https://media.formula1.com/content/dam/fom-website/teams/2023/alpine-logo.png.transform/2col-retina/image.png",
              firstDriver: "Esteban Ocon",
              secondDriver: "Pierre Gasly",
              carImage:
                "https://media.formula1.com/d_team_car_fallback_image.png/content/dam/fom-website/teams/2023/alpine.png.transform/6col-retina/image.png",
            });
          } else if (data.Constructor.constructorId === "haas") {
            teamListApiData.push({
              ...teamList,
              id: data.Constructor.constructorId,
              teamPosition: data.position,
              teamPoints: data.points,
              teamName: data.Constructor.name,
              teamLogo:
                "https://media.formula1.com/content/dam/fom-website/teams/2023/haas-f1-team-logo.png.transform/2col-retina/image.png",
              firstDriver: "Nico Hulkenberg",
              secondDriver: "Kevin Magnussen",
              carImage:
                "https://media.formula1.com/d_team_car_fallback_image.png/content/dam/fom-website/teams/2023/haas-f1-team.png.transform/6col-retina/image.png",
            });
          } else if (data.Constructor.constructorId === "alfa") {
            teamListApiData.push({
              ...teamList,
              id: data.Constructor.constructorId,
              teamPosition: data.position,
              teamPoints: data.points,
              teamName: data.Constructor.name,
              teamLogo:
                "https://media.formula1.com/content/dam/fom-website/teams/2023/alfa-romeo-logo.png.transform/2col-retina/image.png",
              firstDriver: "Valtteri Bottass",
              secondDriver: "Zhou Guanyu",
              carImage:
                "https://media.formula1.com/d_team_car_fallback_image.png/content/dam/fom-website/teams/2023/alfa-romeo.png.transform/6col-retina/image.png",
            });
          } else if (data.Constructor.constructorId === "alphatauri") {
            teamListApiData.push({
              ...teamList,
              id: data.Constructor.constructorId,
              teamPosition: data.position,
              teamPoints: data.points,
              teamName: data.Constructor.name,
              teamLogo:
                "https://media.formula1.com/content/dam/fom-website/teams/2023/alphatauri-logo.png.transform/2col-retina/image.png",
              firstDriver: "Nyck De Vries",
              secondDriver: "Yuki Tsunoda",
              carImage:
                "https://media.formula1.com/d_team_car_fallback_image.png/content/dam/fom-website/teams/2023/alphatauri.png.transform/6col-retina/image.png",
            });
          } else if (data.Constructor.constructorId === "williams") {
            teamListApiData.push({
              ...teamList,
              id: data.Constructor.constructorId,
              teamPosition: data.position,
              teamPoints: data.points,
              teamName: data.Constructor.name,
              teamLogo:
                "https://media.formula1.com/content/dam/fom-website/teams/2023/williams-logo.png.transform/2col-retina/image.png",
              firstDriver: "Alexander Albon",
              secondDriver: "Logan Sargeant",
              carImage:
                "https://media.formula1.com/d_team_car_fallback_image.png/content/dam/fom-website/teams/2023/williams.png.transform/6col-retina/image.png",
            });
          }
        });
      }
    });
  });

  return teamListApiData;
};
