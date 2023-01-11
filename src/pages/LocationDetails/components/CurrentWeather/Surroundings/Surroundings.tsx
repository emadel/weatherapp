import { HTMLAttributes } from 'react';
import { format } from 'date-fns';

import { LocationWeather } from '@/api/types';

import { DD, DL, DT } from '../descriptionBlocks';

import styles from './Surroundings.module.css';

interface Props extends HTMLAttributes<HTMLDListElement> {
  weatherData: LocationWeather;
}

export const Surroundings = (props: Props) => {
  const { weatherData, ...dlProps } = props;

  // TODO currently not taking TZ into account, so will print relative to user locale instead of local time
  // TODO currently ignoring localization - AM/PM speaking people will have to learn military time
  const sunrise = format(weatherData.sunrise, 'HH:mm');
  const sunset = format(weatherData.sunset, 'HH:mm');

  return (
    <DL className={styles.grid} {...dlProps}>
      <div className={styles.sunrise}>
        <DT>Sunrise</DT>

        <DD>
          <time dateTime={sunrise}>{sunrise}</time>
        </DD>
      </div>

      <div className={styles.sunset}>
        <DT>Sunset</DT>

        <DD>
          <time dateTime={sunset}>{sunset}</time>
        </DD>
      </div>

      <div className={styles.humidity}>
        <DT>Humidity</DT>

        <DD>{weatherData.humidity}%</DD>
      </div>

      <div className={styles.visibility}>
        <DT>Visibility</DT>

        <DD>{weatherData.visibility / 1000} km</DD>
      </div>
    </DL>
  );
};
