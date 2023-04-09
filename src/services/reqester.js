export function getCurrentSeason() {
  return fetch(`http://ergast.com/api/f1/current.json`)
    .then(res => res.json())
}

export function getDriversStandings() {
  return fetch(`http://ergast.com/api/f1/2023/driverStandings.json`)
    .then(res => res.json())
}

export function getConstructorStandings() {
  return fetch(`http://ergast.com/api/f1/2023/constructorStandings.json`)
    .then(res => res.json())
}

// export function getAllSeasons() {
//   return fetch(`http://ergast.com/api/f1/seasons.json`)
//     .then(res => res.json())
// }

