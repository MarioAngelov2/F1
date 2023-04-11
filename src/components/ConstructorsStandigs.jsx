import { useState, useEffect } from "react";
import ConstructorsStandigsData from "../components/ConstructorsStandigsData";
import { getConstructorStandings } from "../services/reqester";

import "../style/ConstructorsStandings.css";

const ConstructorsStandigs = () => {
  const [constructorData, setConstructorData] = useState([]);
  console.log(constructorData.map(x => console.log(x.season)))

  useEffect(() => {
    getConstructorStandings().then((result) => {
      setConstructorData(
        Object.values(result.MRData.StandingsTable.StandingsLists)
      );
    });
  }, []);

  return (
    <div className="constructorStandings-container">
      <main>
        <div className="main-content">
          <div className="constructor-progress">
            {constructorData.map((constructor) => (
              <>
                <h2>Season {constructor.season}</h2>
                <h3>Round {constructor.round}</h3>
              </>
            ))}
          </div>
          <table>
            <thead>
              <tr>
                <th>Position</th>
                <th>Constructor</th>
                <th>Nationality</th>
                <th>Points</th>
                <th>Wins</th>
              </tr>
            </thead>
            <tbody>
              <ConstructorsStandigsData />
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
};

export default ConstructorsStandigs;
