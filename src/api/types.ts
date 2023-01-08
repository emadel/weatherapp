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

// TODO this is the raw data. Should create a model that is a bit nicer to work with, that we can map to when fetching (using actual dateTime values etc)
export interface LocationWeather {
  coord: Coordinates;

  main: {
    temp: string;
    temp_max: string;
    temp_min: string;
    humidity: string;
  };

  weather: {
    main: string;
    description: string;
  };

  visibility: number;

  sys: {
    country: string;
    sunrise: number;
    sunset: number;
  };

  timezone: number;
}
