import { createSearchParams, Link } from 'react-router-dom';

import {
  getCoordinates,
  useCurrentWeather,
  useDirectGeocoding,
} from '../../../api';
import type { GeoLocation } from '../../../api/types';

interface Props {
  location: Pick<GeoLocation, 'name' | 'state' | 'country'>;
}

export const Location = (props: Props) => {
  const { location } = props;

  const { data: geoData } = useDirectGeocoding(location, {
    onError: (err) => {
      // TODO capture for UI
      console.error('Failed to fetch geo location', err);
    },
  });

  const coordinates = getCoordinates(geoData);

  const locationWeather = useCurrentWeather(
    { coordinates, units: 'metric' },
    {
      enabled: !!coordinates,
      onError: (err) => {
        // TODO capture for UI
        console.error('Failed to fetch location weather', err);
      },
    }
  );

  if (!coordinates) {
    // TODO either loading or have error at this point - UI should reflect
    return null;
  }

  return (
    <Link to={`location?${createSearchParams(Object.entries(coordinates))}`}>
      <>{location.name}</>
      <>{locationWeather.data?.main.temp}C</>
    </Link>
  );
};
