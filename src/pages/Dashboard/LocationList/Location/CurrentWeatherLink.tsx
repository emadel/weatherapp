import { createSearchParams, Link } from 'react-router-dom';

import { useCurrentWeather } from '@/api/hooks';
import { GeoLocation, Units } from '@/api/types';
import { Temperature } from '@/components';

import styles from './Location.module.css';

interface Props {
  location: GeoLocation;
}

export const CurrentWeatherLink = (props: Props) => {
  const {
    location: { coordinates, name },
  } = props;

  const { data } = useCurrentWeather({ coordinates, units: Units.METRIC });

  return (
    <Link
      className={styles.location}
      to={`location?${createSearchParams(Object.entries(coordinates))}`}
    >
      <span>{name}</span>

      {data && (
        <Temperature
          temperature={data.temperature.current}
          units={data.units}
        />
      )}
    </Link>
  );
};
