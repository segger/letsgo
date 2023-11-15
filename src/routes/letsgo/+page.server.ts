import { fetchDepartures } from '../../components/departures/fetchDepartures';
import type { Result, Departure } from '../../components/departures/departures';

export async function load() {
  let results = await fetchDepartures();
  return {
    departures: results.map((departure: Result) => (
      mapToDeparture(departure)
    ))
  };
}

function mapToDeparture(result: Result): Departure {
  return {
    direction: result.serviceJourney.direction,
    name: result.serviceJourney.line.name,
    shortName: result.serviceJourney.line.shortName,
    backgroundColor: result.serviceJourney.line.backgroundColor,
    foregroundColor: result.serviceJourney.line.foregroundColor,
    platform: result.stopPoint.platform,
    estimatedOtherwisePlannedTime: result.estimatedOtherwisePlannedTime,
    isCancelled: result.isCancelled
  };
}
