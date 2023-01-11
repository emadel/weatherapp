import { useQuery, UseQueryOptions } from '@tanstack/react-query';
import { AxiosError } from 'axios';

import { data } from '@/api/data';
import { Coordinates, LocationWeather, Units } from '@/api/types';

import { Milliseconds } from './constants';
import { toLocationWeather } from './mappers';

type Params = {
  coordinates?: Coordinates;
  units: Units;
  language?: string;
};

type Options = UseQueryOptions<LocationWeather, AxiosError>;

export const locationWeatherPath = (params: Params) => {
  const { coordinates, units } = params;

  if (!coordinates) {
    return `data/2.5/weather?units=${units}`;
  }

  const { lat, lon } = coordinates;
  return `data/2.5/weather?lat=${lat}&lon=${lon}&units=${units}`;
};

export const useCurrentWeather = (params: Params, options?: Options) => {
  const { enabled, staleTime, ...otherOpts } = options || {};

  return useQuery<LocationWeather, AxiosError>(
    [locationWeatherPath(params)],

    async () => {
      const response = await data.get(locationWeatherPath(params));
      return toLocationWeather(response.data, { units: params.units });
    },

    {
      enabled: enabled ?? !!params.coordinates,
      staleTime: staleTime ?? Milliseconds.ONE_MINUTE,
      ...otherOpts,
    }
  );
};
