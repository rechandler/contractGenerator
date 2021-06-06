import MainLayout from 'src/layouts/MainLayout/MainLayout';
import ThreeColGridLayout from 'src/layouts/ThreeColGridLayout/ThreeColGridLayout';
import TwoColSpanLayout from 'src/layouts/TwoColSpanLayout/TwoColSpanLayout';
import OneColSpanLayout from 'src/layouts/OneColSpanLayout/OneColSpanLayout';

import ContractCell from 'src/components/ContractCell/ContractCell';
import NoteCell from 'src/components/NoteCell/NoteCell';

const ContractPage = ({ id }) => {
  return (
    <MainLayout>
      <ThreeColGridLayout >
        <TwoColSpanLayout>
          <ContractCell id={id} />
        </TwoColSpanLayout>
        <OneColSpanLayout>
          <NoteCell id={id} type="contract"/>
        </OneColSpanLayout>
      </ThreeColGridLayout>
    </MainLayout>
  )
}

export default ContractPage
