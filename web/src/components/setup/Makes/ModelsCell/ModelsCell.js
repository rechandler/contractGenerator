import Models from '../Models/Models'

export const QUERY = gql`
  query ModelsQuery($input: MakeInput!) {
    models(input: $input) {
      name,
      category {
        name
      }
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }) => <div>Error: {error.message}</div>

export const Success = ({ models }) => {
  return <Models models={models} />
}
