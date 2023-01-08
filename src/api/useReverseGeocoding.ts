import { useQuery, UseQueryOptions } from '@tanstack/react-query';
import { AxiosError } from 'axios';

import { Milliseconds } from './constants';
import type { Coordinates, GeoLocation } from './types';
import { weatherMap } from './weatherMap';

type Params = Coordinates;

type Options = UseQueryOptions<GeoLocation, AxiosError>;

export const reverseGeocodingQueryKey = ({ lat, lon }: Params) =>
  `geo/1.0/reverse?lat=${lat}&lon=${lon}&limit=1`;

export const useReverseGeocoding = (params: Params, options: Options) => {
  const { retry, staleTime, ...otherOpts } = options;

  return useQuery<GeoLocation, AxiosError>(
    [reverseGeocodingQueryKey(params)],
    () =>
      weatherMap
        .get(reverseGeocodingQueryKey(params))
        .then(({ data }) => data.at(0)),
    {
      retry: retry ?? false,
      staleTime: staleTime ?? Milliseconds.TEN_MINUTES,
      ...otherOpts,
    }
  );
};
