import UserCard from 'src/components/UserCard/UserCard';
import UserContracts from 'src/components/UserContracts/UserContracts';
import ContractListCell from 'src/components/ContractListCell/ContractListCell'
import DealerCard from 'src/components/DealerCard/DealerCard';

import MainLayout from 'src/layouts/MainLayout/MainLayout';
import ThreeColGridLayout from 'src/layouts/ThreeColGridLayout/ThreeColGridLayout';
import TwoColSpanLayout from 'src/layouts/TwoColSpanLayout/TwoColSpanLayout';
import OneColSpanLayout from 'src/layouts/OneColSpanLayout/OneColSpanLayout';

const HomePage = () => {
  return (
    <MainLayout>
      <ThreeColGridLayout>
        {/* Left column */}
        <TwoColSpanLayout>
          <UserCard />
          <UserContracts />
        </TwoColSpanLayout>
        {/* Right Column */}
        <OneColSpanLayout>
          <DealerCard />
        </OneColSpanLayout>
      </ThreeColGridLayout>
    </MainLayout>
  )
}

export default HomePage
