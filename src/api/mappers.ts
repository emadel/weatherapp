import { Coordinates, GeoLocation } from './types';

export const getCoordinates = (
  geoData?: GeoLocation
): Coordinates | undefined => {
  return geoData ? { lat: geoData.lat, lon: geoData.lon } : undefined;
};

// TODO create mapping from raw data format to something more suitable for this app
