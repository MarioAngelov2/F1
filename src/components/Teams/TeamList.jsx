import { useState, useEffect } from "react";
import { teamList } from "../../utils/teamList";

import "../../style/Teams.css";

const TeamList = () => {
  return (
    <div className="drivers-container">
      <div className="row">
        {teamList.map((team) => (
          <div key={team.teamName} className="listing-container">
            <div className="listing-wrapper">
              <div className="listing-item">
                <div className="listing-standing">
                  <div className="rank">{team.teamPosition}</div>
                  <div className="points">
                    <div className="team-pts">{team.teamPoints}</div>
                    <div className="pts-logo">Pts</div>                  
                  </div>
                </div>
                <div className="listing-info">
                  <div className="team-info">
                    <span>{team.teamName}</span>
                  </div>
                  <div className="team-logo">
                    <img src={team.teamLogo} />
                  </div>
                  <div className="listing-drivers">
                    <div className="driver">{team.firstDriver}</div>
                    <div className="driver">{team.secondDriver}</div>
                  </div>
                  <div className="team-car-image">
                    <img src={team.carImage} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeamList;

