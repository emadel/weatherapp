import { BackButton } from './BackButton';
import { Surroundings } from './Surroundings';
import { Temperatures } from './Temperatures';
import { useCoordinatesParams } from './useCoordinatesParams';
import { Weather } from './Weather';

import { useCurrentWeather, useReverseGeocoding } from '@/api/hooks';
import { Units } from '@/api/types';

export const LocationDetails = () => {
  const coordinates = useCoordinatesParams();

  const { data: geoData } = useReverseGeocoding(coordinates, {
    onError: (err) => {
      // TODO capture in state for UI
      console.error('Failed to do reverse geocoding', err);
    },
  });

  const { data: weatherData } = useCurrentWeather(
    { coordinates, units: Units.METRIC },
    {
      enabled: !!coordinates,
      onError: (err) => {
        // TODO capture in state for UI
        console.error('Failed to fetch location weather', err);
      },
    }
  );

  if (!geoData || !weatherData) {
    // TODO either loading or have data fetch error at this point - UI should reflect
    return null;
  }

  return (
    <div>
      <header>
        <BackButton />

        <h1>{geoData.name}</h1>
      </header>

      <section>
        <Weather weather={weatherData.weather} />

        <Temperatures
          temperature={weatherData.temperature}
          units={weatherData.units}
        />

        <Surroundings weatherData={weatherData} />
      </section>
    </div>
  );
};
