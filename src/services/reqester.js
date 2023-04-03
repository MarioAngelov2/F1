export function getAllRaces() {
  return fetch(`http://ergast.com/api/f1/current.json`)
    .then(res => res.json())
}