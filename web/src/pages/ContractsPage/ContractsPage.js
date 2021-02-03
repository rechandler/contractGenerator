import MainLayout from 'src/layouts/MainLayout/MainLayout';
import ThreeColGridLayout from 'src/layouts/ThreeColGridLayout/ThreeColGridLayout';
import ThreeColSpanLayout from 'src/layouts/ThreeColSpanLayout/ThreeColSpanLayout';
import UserContracts from 'src/components/UserContracts/UserContracts'

const ContractsPage = () => {
  return (
    <MainLayout>
      <ThreeColGridLayout>
        <ThreeColSpanLayout>
          <UserContracts />
        </ThreeColSpanLayout>
      </ThreeColGridLayout>
    </MainLayout>
  )
}

export default ContractsPage
