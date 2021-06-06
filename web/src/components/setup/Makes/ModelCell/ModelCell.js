import Model from '../Model/Model'

export const QUERY = gql`
  query ModelQuery($input: ModelSearch!) {
    model(input: $input) {
      name,
      id,
      category {
        name,
        id
      }
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }) => <div>Error: {error.message}</div>

export const Success = ({ model }) => {
  return <Model model={model} />
}
