import { useState, useEffect } from "react";
import ConstructorsStandigsData from '../components/ConstructorsStandigsData'

import '../style/ConstructorsStandings.css'

const ConstructorsStandigs = () => {
  return (
    <div className="constructorStandings-container">
      <main>
        <div className="main-content">
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
