import ContractsList from './ContractsList'

const UserContracts = () => {
  return (
    <div className="rounded-lg bg-white overflow-hidden shadow">
      <div className="bg-gray-50 p-6">
        <h3 className="text-lg leading-6 font-medium text-gray-900">
          Recently Sold Contracts
        </h3>
        <p className="mt-1 text-sm text-gray-500">
          Contracts that have been sold by you in the last 10 days
        </p>
      </div>
      <ContractsList />
    </div>
  )
}

export default UserContracts
