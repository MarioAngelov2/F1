export function getCurrentSeason() {
  return fetch(`https://ergast.com/api/f1/current.json`).then((res) => {
    if (res.status === 200) {
      return res.json();
    } else {
      throw new Error(`getCurrentSeason failed with status: ${res.status}`);
    }
  });
}

export function getDriversStandings() {
  return fetch(`https://ergast.com/api/f1/2023/driverStandings.json`).then(
    (res) => {
      if (res.status === 200) {
        return res.json();
      } else {
        throw new Error(
          `getDriversStandings failed with status: ${res.status}`
        );
      }
    }
  );
}

export function getConstructorStandings() {
  return fetch(`https://ergast.com/api/f1/2023/constructorStandings.json`).then(
    (res) => {
      if (res.status === 200) {
        return res.json();
      } else {
        throw new Error(
          `getConstructorStandings failed with status: ${res.status}`
        );
      }
    }
  );
}
