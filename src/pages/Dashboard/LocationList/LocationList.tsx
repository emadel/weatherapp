import { Location } from './Location';
import { useLocations } from './useLocations';

export const LocationList = () => {
  const locations = useLocations();

  return (
    <ul>
      {locations.map((location) => (
        <li>
          <Location location={location} />
        </li>
      ))}
    </ul>
  );
};
