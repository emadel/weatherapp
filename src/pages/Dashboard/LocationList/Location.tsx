import { createSearchParams, Link } from 'react-router-dom';

import { getCoordinates, useCurrentWeather, useDirectGeocoding } from '@/api';
import { Units } from '@/api/constants';
import type { GeoLocation } from '@/api/types';
import { Temperature } from '@/components';

interface Props {
  location: Pick<GeoLocation, 'name' | 'state' | 'country'>;
}

export const Location = (props: Props) => {
  const { location } = props;

  const { data: geoData } = useDirectGeocoding(location, {
    onError: (err) => {
      // TODO capture in state for UI
      console.error('Failed to fetch geo location', err);
    },
  });

  const coordinates = getCoordinates(geoData);

  const { data: weatherData } = useCurrentWeather(
    { coordinates, units: Units.METRIC },
    {
      enabled: !!coordinates,
      onError: (err) => {
        // TODO capture in state for UI
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
      <span>{location.name}</span>

      {weatherData && (
        <>
          <>&nbsp;</>
          <Temperature
            temperature={weatherData.temperature.current}
            units={weatherData.units}
          />
        </>
      )}
    </Link>
  );
};
