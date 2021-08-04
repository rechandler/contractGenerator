import Contracts from '../Contracts/Contracts'
import { navigate, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

export const QUERY = gql`
  query SourceQuery {
    sources {
      id
    }
  }
`

const CREATE_SOURCE_MUTATION = gql`
  mutation CreateContract {
    createSource {
      id
    }
  }
`

const onCompleted = (source) => {
  toast.success('Created New Contract')
  console.log('source', source)
  navigate(
    routes.contractGeneratorContractBasicInfo({
      contractId: source.createSource.id,
    })
  )
}

export const Loading = () => <div>Loading...</div>

export const Empty = () => {
  const [createSource, { loading, error }] = useMutation(
    CREATE_SOURCE_MUTATION,
    {
      onCompleted,
    }
  )

  return (
    <div className="col-span-9">
      <div className="flex flex-auto justify-center content-center h-full">
        <div className="self-center">
          <h3 className="text-lg leading-6 font-medium text-gray-900">
            No Contracts
          </h3>
          <p className="mt-1 max-w-2xl text-sm text-gray-500">
            You haven't created any Contracts yet. Contracts are the sellable
            units that represent pdf's.
          </p>
          <div className="flex flex-auto justify-center">
            <button
              type="button"
              className="mt-10 inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-cyan-600 hover:bg-cyan-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500"
              onClick={createSource}
            >
              Create First Contract
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export const Failure = ({ error }) => <div>Error: {error.message}</div>

export const Success = ({ sources }) => {
  const [createSource, { loading, error }] = useMutation(
    CREATE_SOURCE_MUTATION,
    {
      onCompleted,
    }
  )
  return <Contracts createSource={createSource} sources={sources} />
}
