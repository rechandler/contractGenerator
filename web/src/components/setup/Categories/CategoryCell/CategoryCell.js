import CategoryEdit from '../CategoryEdit'
import { useEffect } from 'react'
import { navigate, routes } from '@redwoodjs/router'

export const QUERY = gql`
  query CategoryQuery($categoryId: Int!) {
    category(categoryId: $categoryId) {
      id,
      name,
      yearsBack
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }) => {
  useEffect(() => {
    if (error.graphQLErrors[0].extensions.code === "FORBIDDEN") {
      navigate(routes.categories())
    }
  }, [error])
  return <div>Error: {error.message}</div>;
}

export const Success = ({ category }) => {
  return <CategoryEdit category={category} />
}
