import { useLocation, useNavigate, useSearchParams } from 'react-router-dom';

import { useCurrentWeather, useReverseGeocoding } from '../../api';
import { Coordinates } from '../../api/types';

const useCoordinates = (): Coordinates | undefined => {
  const location = useLocation();
  const [searchParams] = useSearchParams(location.search);

  const lat = searchParams.get('lat');
  const lon = searchParams.get('lon');

  const validCoordinates = !!lat && !!lon;

  return validCoordinates ? { lat, lon } : undefined;
};

export const LocationDetails = () => {
  const coordinates = useCoordinates();

  if (!coordinates) {
    // TODO handle this gracefully (i.e. someone mucked with the query string)
    throw new Error('Missing valid coordinates');
  }

  const { data: geoData } = useReverseGeocoding(coordinates, {
    onError: (err) => {
      // TODO capture for UI
      console.error('Failed to do reverse geocoding', err);
    },
  });

  const { data: weatherData } = useCurrentWeather(
    { coordinates, units: 'metric' },
    {
      enabled: !!coordinates,
      onError: (err) => {
        // TODO capture for UI
        console.error('Failed to fetch location weather', err);
      },
    }
  );

  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };

  if (!geoData || !weatherData) {
    // TODO either loading or have error at this point - UI should reflect
    return null;
  }

  // TODO add navigation back - should maybe not be a button
  // TODO evaluate if definition list makes sense semnatically here
  // TODO assuming sunrise and sunset are in sensible HH:mm format
  // TODO consider semantics for the temperature block
  return (
    <div>
      <header>
        <button onClick={goBack}>Back</button>

        <h1>{geoData.name}</h1>
      </header>

      <span>{weatherData.weather.main}</span>

      <div>
        <span>{weatherData.main.temp}C</span>

        <span>H: {weatherData.main.temp_max}</span>

        <span>L: {weatherData.main.temp_min}</span>
      </div>

      <dl>
        <dt>Sunrise</dt>

        <dd>
          <time dateTime={`${weatherData.sys.sunrise}`}>
            {weatherData.sys.sunrise}
          </time>
        </dd>

        <dt>Sunset</dt>

        <dd>
          <time dateTime={`${weatherData.sys.sunset}`}>
            {weatherData.sys.sunset}
          </time>
        </dd>

        <dt>Humidity</dt>

        <dd>{weatherData.main.humidity}%</dd>

        <dt>Visibility</dt>

        <dd>{weatherData.visibility}km</dd>
      </dl>
    </div>
  );
};
