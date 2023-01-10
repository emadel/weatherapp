export enum Units {
  STANDARD = 'standard',
  METRIC = 'metric',
  IMPERIAL = 'imperial',
}

export interface Coordinates {
  lon: string;
  lat: string;
}

export interface GeoLocation {
  name: string;
  state?: string;
  country: string;

  localeName: Record<string, string>;

  coordinates: Coordinates;
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
