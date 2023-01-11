import { useDirectGeocoding } from '@/api/hooks';
import { GeoLocation } from '@/api/types';
import { CurrentWeatherLink } from '@/pages/Dashboard/LocationList/Location/CurrentWeatherLink';

import styles from './Location.module.css';

interface Props {
  location: Pick<GeoLocation, 'name' | 'state' | 'country'>;
}

export const Location = (props: Props) => {
  const { location } = props;

  const { data, error } = useDirectGeocoding(location);

  if (data) {
    return <CurrentWeatherLink location={data} />;
  }

  if (error) {
    return (
      <span className={styles.location}>Failed to look up {location.name}</span>
    );
  }

  return <span className={styles.location}>Loading....</span>;
};
