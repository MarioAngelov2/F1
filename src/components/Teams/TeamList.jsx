import { useState, useEffect } from "react";
import TeamListData from "./TeamListData";

import "../../style/Teams.css";

const TeamList = () => {
  return (
    <div className="drivers-container">
      <div className="row">
        <TeamListData />
      </div>
    </div>
  );
};

export default TeamList;

// return (
//   <div className="drivers-container">
//     <div className="row">
//       {teamList.map((team) => (
//         <div key={team.teamName} className="listing-container">
//           <div className="card">
//             <div className="card-body">
//               <div className="card-standingInfo">
//                 <div className="ranking">
//                   {team.teamPosition}
//                   </div>
//                 <div className="points">
//                   <div className="team-pts">{team.teamPoints}</div>
//                   <div className="logo-pts">Pts</div>
//                 </div>
//               </div>
//               <div className="card-TeamInfo">
//                 <div className="teamName">
//                   <span>{team.teamName}</span>
//                   <div className="teamLogo">
//                     <img src={team.teamLogo} />
//                   </div>
//                 </div>
//                 <div className="card-drivers">
//                   <div className="driver">{team.firstDriver}</div>
//                   <div className="driver">{team.secondDriver}</div>
//                 </div>
//                 <div className="team-car-image">
//                   <img src={team.carImage} />
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       ))}
//     </div>
//   </div>
// );
