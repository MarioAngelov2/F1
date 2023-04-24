const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

export function getCurrentSeason() {
  return fetch(`${API_BASE_URL}current.json`).then((res) => {
    if (res.status === 200) {
      return res.json();
    } else {
      throw new Error(`getCurrentSeason failed with status: ${res.status}`);
    }
  });
}

export function getDriversStandings() {
  return fetch(`${API_BASE_URL}2023/driverStandings.json`).then((res) => {
    if (res.status === 200) {
      return res.json();
    } else {
      throw new Error(`getDriversStandings failed with status: ${res.status}`);
    }
  });
}

export function getConstructorStandings() {
  return fetch(`${API_BASE_URL}2023/constructorStandings.json`).then((res) => {
    if (res.status === 200) {
      return res.json();
    } else {
      throw new Error(
        `getConstructorStandings failed with status: ${res.status}`
      );
    }
  });
}
