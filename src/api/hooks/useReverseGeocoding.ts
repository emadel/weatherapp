import { useQuery, UseQueryOptions } from '@tanstack/react-query';
import { AxiosError } from 'axios';

import { data } from '@/api/data';
import { Coordinates, GeoLocation } from '@/api/types';

import { Milliseconds } from './constants';
import { toGeoLocation } from './mappers';

type Params = Coordinates;

type Options = UseQueryOptions<GeoLocation, AxiosError>;

export const reverseGeocodingPath = ({ lat, lon }: Params) =>
  `geo/1.0/reverse?lat=${lat}&lon=${lon}&limit=1`;

export const useReverseGeocoding = (params: Params, options: Options) => {
  const { retry, staleTime, ...otherOpts } = options;

  return useQuery<GeoLocation, AxiosError>(
    [reverseGeocodingPath(params)],

    async () => {
      const response = await data.get(reverseGeocodingPath(params));
      return toGeoLocation(response.data.at(0));
    },

    {
      retry: retry ?? false,
      staleTime: staleTime ?? Milliseconds.TEN_MINUTES,
      ...otherOpts,
    }
  );
};
