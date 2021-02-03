import { render } from '@redwoodjs/testing'

import UserContracts from './UserContracts'

describe('UserContracts', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<UserContracts />)
    }).not.toThrow()
  })
})
