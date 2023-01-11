import { PageContainer, SectionContainer } from '@/components';

import { LocationList } from './LocationList';

export const Dashboard = () => {
  return (
    <PageContainer>
      <header>
        <h1>Dashboard</h1>
      </header>

      <SectionContainer>
        <LocationList />
      </SectionContainer>
    </PageContainer>
  );
};
