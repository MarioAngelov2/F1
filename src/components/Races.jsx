import React from "react";
import "../style/Races.css";

const Races = () => {
  return (
    <div className="races-container">
      <main className="main">
        <div className="main-content">
          <table>
            <thead>
              <h1>Season 2023</h1>
              <tr>
                <th>Round</th>
                <th>Country</th>
                <th>Grand Prix</th>
                <th>Qualifying</th>
                <th>Race</th>
                <th>Circuit</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="race-round">1</td>
                <td className="country-flag">National flag</td>
                <td className="grand-prix">Bahrain Grand Prix</td>
                <td className="qualy-info">04.03.2023 17:00</td>
                <td className="race-info">05.03.2023 17:00</td>
                <td className="curcuit-name">Bahrain International Circuit</td>
              </tr>
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
};

export default Races;
