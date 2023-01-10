import { fromUnixTime } from 'date-fns';

import type { LocationData, WeatherData } from '@/api/data';
import { GeoLocation, LocationWeather, Units } from '@/api/types';

export const toGeoLocation = (source: LocationData): GeoLocation => {
  const { name, state, country, local_names: localeName, lat, lon } = source;

  return { name, state, country, localeName, coordinates: { lat, lon } };
};

export const toLocationWeather = (
  source: WeatherData,
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
