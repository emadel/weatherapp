import { HTMLAttributes } from 'react';
import { format } from 'date-fns';

import { LocationWeather } from '../../api/types';

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
    <dl {...dlProps}>
      <dt>Sunrise</dt>

      <dd>
        <time dateTime={sunrise}>{sunrise}</time>
      </dd>

      <dt>Sunset</dt>

      <dd>
        <time dateTime={sunset}>{sunset}</time>
      </dd>

      <dt>Humidity</dt>

      <dd>{weatherData.humidity}%</dd>

      <dt>Visibility</dt>

      <dd>{weatherData.visibility / 1000} km</dd>
    </dl>
  );
};
