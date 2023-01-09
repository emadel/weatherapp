import { LocationList } from './LocationList';

export const Dashboard = () => {
  return (
    <div>
      <header>
        <h1>Dashboard</h1>
      </header>

      <section>
        <h2>Locations</h2>

        <LocationList />
      </section>
    </div>
  );
};
