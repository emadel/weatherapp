import { useLocations } from './hooks';
import { Location } from './Location';
import styles from './LocationList.module.css';

export const LocationList = () => {
  const locations = useLocations();

  return (
    <ul className={styles.list}>
      {locations.map((location) => (
        <li className={styles.listItem}>
          <Location location={location} />
        </li>
      ))}
    </ul>
  );
};
