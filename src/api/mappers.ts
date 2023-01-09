import { fromUnixTime } from 'date-fns';

import { Units } from './constants';
import {
  Coordinates,
  GeoLocation,
  LocationWeather,
  LocationWeatherData,
} from './types';

export const getCoordinates = (
  geoData?: GeoLocation
): Coordinates | undefined => {
  return geoData ? { lat: geoData.lat, lon: geoData.lon } : undefined;
};

export const toLocationWeather = (
  source: LocationWeatherData,
  opts: { units: Units }
): LocationWeather => {
  return {
    units: opts.units,

    coordinates: source.coord,

    temperature: {
      current: Math.round(source.main.temp),
      high: Math.round(source.main.temp_max),
      low: Math.round(source.main.temp_min),
    },

    weather: source.weather.filter(({ main }) => Boolean(main)).pop(),

    humidity: source.main.humidity,
    visibility: source.visibility,

    sunrise: fromUnixTime(source.sys.sunrise),
    sunset: fromUnixTime(source.sys.sunset),
    tz: source.timezone,
  };
};
