import { useQuery, UseQueryOptions } from '@tanstack/react-query';
import { AxiosError } from 'axios';

import { Milliseconds } from './constants';
import { LocationWeather } from './types';
import { weatherMap } from './weatherMap';

type Params = {
  coordinates?: {
    lat: string;
    lon: string;
  };
  units?: 'standard' | 'metric' | 'imperial';
  language?: string;
};

type Options = UseQueryOptions<LocationWeather, AxiosError>;

export const locationWeatherQueryKey = (params: Params) => {
  const { coordinates, units = 'metric' } = params;

  if (!coordinates) {
    return `data/2.5/weather?units=${units}`;
  }

  const { lat, lon } = coordinates;
  return `data/2.5/weather?lat=${lat}&lon=${lon}&units=${units}`;
};

export const useCurrentWeather = (params: Params, options: Options) => {
  const { retry, enabled, staleTime, ...otherOpts } = options;

  return useQuery<LocationWeather, AxiosError>(
    [locationWeatherQueryKey(params)],
    () =>
      weatherMap.get(locationWeatherQueryKey(params)).then(({ data }) => data),
    {
      retry: retry ?? false,
      enabled: enabled ?? !!params.coordinates,
      staleTime: staleTime ?? Milliseconds.ONE_MINUTE,
      ...otherOpts,
    }
  );
};
