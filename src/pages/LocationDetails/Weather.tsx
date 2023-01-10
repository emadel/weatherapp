import { HTMLAttributes } from 'react';

import { LocationWeather } from '@/api/types';

interface Props extends HTMLAttributes<HTMLDListElement> {
  weather: LocationWeather['weather'];
}

export const Weather = (props: Props) => {
  const { weather, ...dlProps } = props;

  return (
    <dl {...dlProps}>
      <dt>{weather?.main}</dt>

      <dd>{weather?.description}</dd>
    </dl>
  );
};
