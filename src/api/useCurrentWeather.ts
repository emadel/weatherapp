import { useQuery, UseQueryOptions } from '@tanstack/react-query';
import { AxiosError } from 'axios';

import { Milliseconds, Units } from './constants';
import { toLocationWeather } from './mappers';
import { LocationWeather } from './types';
import { weatherMap } from './weatherMap';

type Params = {
  coordinates?: {
    lat: string;
    lon: string;
  };
  units: Units;
  language?: string;
};

type Options = UseQueryOptions<LocationWeather, AxiosError>;

export const locationWeatherQueryKey = (params: Params) => {
  const { coordinates, units } = params;

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

    async () => {
      const response = await weatherMap.get(locationWeatherQueryKey(params));
      return toLocationWeather(response.data, { units: params.units });
    },

    {
      retry: retry ?? false,
      enabled: enabled ?? !!params.coordinates,
      staleTime: staleTime ?? Milliseconds.ONE_MINUTE,
      ...otherOpts,
    }
  );
};
