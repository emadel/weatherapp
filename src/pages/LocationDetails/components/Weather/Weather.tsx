import { HTMLAttributes } from 'react';

import { LocationWeather } from '@/api/types';

import { DD, DL, DT } from '../descriptionBlocks';

interface Props extends HTMLAttributes<HTMLDListElement> {
  weather: LocationWeather['weather'];
}

export const Weather = (props: Props) => {
  const { weather, ...dlProps } = props;

  return (
    <DL {...dlProps}>
      <DT visuallyHidden>Current conditions</DT>

      <DD>{weather?.main}</DD>
    </DL>
  );
};
