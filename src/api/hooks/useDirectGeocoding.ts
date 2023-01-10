import { useQuery, UseQueryOptions } from '@tanstack/react-query';
import { AxiosError } from 'axios';

import { data } from '@/api/data';
import { GeoLocation } from '@/api/types';

import { Milliseconds } from './constants';
import { toGeoLocation } from './mappers';

type Params = Pick<GeoLocation, 'name' | 'state' | 'country'>;

type Options = UseQueryOptions<GeoLocation, AxiosError>;

export const directGeocodingPath = (params: Params) => {
  const location = [params.name, params.state, params.country]
    .filter(Boolean)
    .join(',');

  return `geo/1.0/direct?q=${location}&limit=1`;
};

export const useDirectGeocoding = (params: Params, options: Options) => {
  const { retry, staleTime, ...otherOpts } = options;

  return useQuery<GeoLocation, AxiosError>(
    [directGeocodingPath(params)],

    async () => {
      const response = await data.get(directGeocodingPath(params));
      return toGeoLocation(response.data.at(0));
    },

    {
      retry: retry ?? false,
      staleTime: staleTime ?? Milliseconds.TEN_MINUTES,
      ...otherOpts,
    }
  );
};
