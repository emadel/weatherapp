import { HTMLAttributes } from 'react';

import { LocationWeather, Units } from '@/api/types';
import { Temperature } from '@/components';

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
    <dl {...dlProps}>
      <dt>Current</dt>

      <dd>
        <Temperature temperature={current} units={units} />
      </dd>

      <dt>High</dt>

      <dd>
        <Temperature temperature={high} units={units} />
      </dd>

      <dt>Low</dt>

      <dd>
        <Temperature temperature={low} units={units} />
      </dd>
    </dl>
  );
};
