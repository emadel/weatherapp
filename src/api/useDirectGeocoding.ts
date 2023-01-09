import { useQuery, UseQueryOptions } from '@tanstack/react-query';
import { AxiosError } from 'axios';

import { Milliseconds } from './constants';
import type { GeoLocation } from './types';
import { weatherMap } from './weatherMap';

type Params = Pick<GeoLocation, 'name' | 'state' | 'country'>;

type Options = UseQueryOptions<GeoLocation, AxiosError>;

export const directGeocodingQueryKey = (params: Params) => {
  const location = [params.name, params.state, params.country]
    .filter(Boolean)
    .join(',');

  return `geo/1.0/direct?q=${location}&limit=1`;
};

export const useDirectGeocoding = (params: Params, options: Options) => {
  const { retry, staleTime, ...otherOpts } = options;

  return useQuery<GeoLocation, AxiosError>(
    [directGeocodingQueryKey(params)],
    () =>
      weatherMap
        .get(directGeocodingQueryKey(params))
        .then(({ data }) => data.at(0)),
    {
      retry: retry ?? false,
      staleTime: staleTime ?? Milliseconds.TEN_MINUTES,
      ...otherOpts,
    }
  );
};
