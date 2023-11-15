import { fetchDepartures } from './fetchDepartures';

export async function load() {
  let results = await fetchDepartures();
  return {
    summaries: results.map((departure) => ({
      slug: departure.plannedTime,
      title: departure.serviceJourney.line.name
    }))
  };
}
