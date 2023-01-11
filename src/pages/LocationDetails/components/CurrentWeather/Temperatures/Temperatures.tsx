import { HTMLAttributes } from 'react';

import { LocationWeather, Units } from '@/api/types';
import { Temperature } from '@/components';

import { DD, DL, DT } from '../descriptionBlocks';

import styles from './Temperatures.module.css';

interface Props extends HTMLAttributes<HTMLDListElement> {
  temperature: LocationWeather['temperature'];
  units: Units;
}

export const Temperatures = (props: Props) => {
  const {
    temperature: { current, high, low },
    units,
    ...dlProps
  } = props;

  return (
    <DL className={styles.grid} {...dlProps}>
      <div className={styles.current}>
        <DT visuallyHidden>Current temperature</DT>

        <DD className={styles.current}>
          <Temperature temperature={current} units={units} />
        </DD>
      </div>

      <div className={styles.high}>
        <DT>High:</DT>

        <DD>
          <Temperature temperature={high} units={units} />
        </DD>
      </div>

      <div className={styles.low}>
        <DT>Low:</DT>

        <DD>
          <Temperature temperature={low} units={units} />
        </DD>
      </div>
    </DL>
  );
};
