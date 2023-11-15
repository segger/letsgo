import { API_AUTHORIZATION_HEADER } from '$env/static/private';

export async function fetchDepartures() {
  try {
    const response = await fetch(
      'https://ext-api.vasttrafik.se/pr/v4/stop-areas/9021014001200000/departures?timeSpanInMinutes=60&maxDeparturesPerLineAndDirection=2&limit=20&offset=0&includeOccupancy=false&directionGid=9021014001950000',
      {
        headers: {
          Accept: 'application/json',
          Authorization:
            `Bearer ${API_AUTHORIZATION_HEADER}`
        }
      }
    );
    const data = await response.json();
    return data.results;
  } catch (error) {
    console.error('Error', error);
  }
}
