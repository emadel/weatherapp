import { useCurrentWeather, useReverseGeocoding } from '@/api/hooks';
import { Units } from '@/api/types';
import { PageContainer, SectionContainer } from '@/components';

import { Header, Surroundings, Temperatures, Weather } from './components';
import styles from './LocationDetails.module.css';
import { useCoordinatesParams } from './useCoordinatesParams';

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
    <PageContainer>
      <Header>{geoData.name}</Header>

      <SectionContainer className={styles.container}>
        <div className={styles.weatherBlock}>
          <Weather weather={weatherData.weather} />

          <Temperatures
            temperature={weatherData.temperature}
            units={weatherData.units}
          />
        </div>

        <Surroundings weatherData={weatherData} />
      </SectionContainer>
    </PageContainer>
  );
};
