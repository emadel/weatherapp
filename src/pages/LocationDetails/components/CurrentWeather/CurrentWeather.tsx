import { useCurrentWeather } from '@/api/hooks';
import { Coordinates, Units } from '@/api/types';

import styles from './CurrentWeather.module.css';
import { Surroundings } from './Surroundings';
import { Temperatures } from './Temperatures';
import { Weather } from './Weather';

interface Props {
  coordinates: Coordinates;
}

export const CurrentWeather = (props: Props) => {
  const { coordinates } = props;

  const { data, error } = useCurrentWeather({
    coordinates,
    units: Units.METRIC,
  });

  if (data) {
    return (
      <>
        <div className={styles.weatherBlock}>
          <Weather weather={data.weather} />

          <Temperatures temperature={data.temperature} units={data.units} />
        </div>

        <Surroundings weatherData={data} />
      </>
    );
  }

  if (error) {
    return (
      <>Failed while loading weather details. Server says {error.message}</>
    );
  }

  return <>Loading latest weather information...</>;
};
