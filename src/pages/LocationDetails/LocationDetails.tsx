import { useReverseGeocoding } from '@/api/hooks';
import { PageContainer, SectionContainer } from '@/components';

import { CurrentWeather, Header } from './components';
import styles from './LocationDetails.module.css';
import { useCoordinatesParams } from './useCoordinatesParams';

export const LocationDetails = () => {
  const coordinates = useCoordinatesParams();

  const { data, error } = useReverseGeocoding(coordinates, {});

  if (data) {
    return (
      <PageContainer>
        <Header>{data.name}</Header>

        <SectionContainer className={styles.container}>
          <CurrentWeather coordinates={coordinates} />
        </SectionContainer>
      </PageContainer>
    );
  }

  if (error) {
    return (
      <PageContainer>
        <p>Could not find a place matching the given coordinates.</p>

        <p>Server says {error.message}</p>
      </PageContainer>
    );
  }

  return <>Loading latest weather for location...</>;
};
