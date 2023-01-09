import { useLocation, useSearchParams } from 'react-router-dom';

import { Coordinates } from '../../api/types';

export const useCoordinatesParams = (): Coordinates => {
  const location = useLocation();
  const [searchParams] = useSearchParams(location.search);

  const lat = searchParams.get('lat');
  const lon = searchParams.get('lon');

  const validCoordinates = !!lat && !!lon;

  if (!validCoordinates) {
    // TODO handle this gracefully (i.e. someone mucked with the query string)
    throw new Error('Missing valid coordinates');
  }

  return { lat, lon };
};
