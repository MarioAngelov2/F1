import { useState, useEffect } from "react";
import { getConstructorStandings } from "../services/reqester";

const ConstructorsStandigsData = () => {
  const [constructorInfo, setConstructorInfo] = useState([]);
  const data = constructorInfo.map(x => {
    x.ConstructorStandings.map(x => {
      console.log(x.Constructor.name)
    })
  })

  useEffect(() => {
    getConstructorStandings().then((result) => {
      setConstructorInfo(
        Object.values(result.MRData.StandingsTable.StandingsLists)
      );
    });
  }, []);

  return constructorInfo.map((constructor) => 
    constructor.ConstructorStandings.map((constructor) => (
      <tr key={constructor.Constructor.constructorId}>
        <td className="constructor-pos">{constructor.position}</td>
        <td className="constructor-name">{constructor.Constructor.name}</td>
        <td className="constructor-nationality">
          {constructor.Constructor.nationality}
        </td>
        <td className="constructor-pts">{constructor.points}</td>
        <td className="constructor-wins">{constructor.wins}</td>
      </tr>
    ))
  )
};

export default ConstructorsStandigsData;
