export interface LocationData {
  name: string;
  state?: string;
  country: string;
  local_names: Record<string, string>;
  lat: string;
  lon: string;
}

export interface WeatherData {
  coord: {
    lon: string;
    lat: string;
  };

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
