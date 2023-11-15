export type Result = {
  detailsReference: string,
  serviceJourney: ServiceJourney,
  stopPoint: StopPoint,
  plannedTime: string,
  estimatedTime: string,
  estimatedOtherwisePlannedTime: string,
  isCancelled: boolean,
  isPartCancelled: boolean,
};

export type ServiceJourney = {
  direction: string,
  line: ServiceLine,
};

export type ServiceLine = {
  gid: string,
  name: string,
  shortName: string,
  backgroundColor: string,
  foregroundColor: string,
  borderColor: string,
  transportMode: string,
  transportSubMode: string,
  isWheelchairAcessible: boolean,
};

export type StopPoint = {
  gid: string,
  name: string,
  platform: string,
  latitude: number,
  longitude: number,
};

export type Departure = {
  direction: string,
  name: string,
  shortName: string,
  backgroundColor: string,
  foregroundColor: string,
  platform: string,
  estimatedOtherwisePlannedTime: string,
  isCancelled: boolean,
};