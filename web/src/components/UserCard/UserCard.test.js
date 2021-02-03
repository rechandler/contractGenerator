import { render } from '@redwoodjs/testing'

import UserCard from './UserCard'

describe('UserCard', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<UserCard />)
    }).not.toThrow()
  })
})
