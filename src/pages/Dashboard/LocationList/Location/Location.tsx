import { createSearchParams, Link } from 'react-router-dom';

import { useCurrentWeather, useDirectGeocoding } from '@/api/hooks';
import { GeoLocation, Units } from '@/api/types';
import { Temperature } from '@/components';

import styles from './Location.module.css';

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

  const coordinates = geoData?.coordinates;

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
    <Link
      className={styles.location}
      to={`location?${createSearchParams(Object.entries(coordinates))}`}
    >
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
