// import ContractsList from './ContractsList'
import  ContractListCell from 'src/components/ContractListCell/ContractListCell'
import BigCard from 'src/components/BigCard/BigCard'

const UserContracts = () => {
  return (
    <BigCard
      header="Recently Sold Contracts"
      subHeader="Contracts that have been sold by you in the last 10 days">
      <ContractListCell />
    </BigCard>
  )
}

export default UserContracts
