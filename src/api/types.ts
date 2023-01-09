import { Units } from './constants';

export interface GeoLocation {
  name: string;
  state?: string;
  country: string;
  local_names: Record<string, string>;
  lat: string;
  lon: string;
}

export interface Coordinates {
  lon: string;
  lat: string;
}

export interface LocationWeatherData {
  coord: Coordinates;

  main: {
    temp: number;
    temp_max: number;
    temp_min: number;
    humidity: number;
  };

  weather: Array<{
    main: string;
    description: string;
  }>;

  visibility: number;

  sys: {
    country: string;
    sunrise: number;
    sunset: number;
  };

  timezone: number;
}

export interface LocationWeather {
  units: Units;

  coordinates: Coordinates;

  temperature: {
    current: number;
    high: number;
    low: number;
  };

  weather?: {
    main: string;
    description: string;
  };

  humidity: number;
  visibility: number;

  sunrise: Date;
  sunset: Date;
  tz: number;
}
