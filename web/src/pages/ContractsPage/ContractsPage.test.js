import { render } from '@redwoodjs/testing'

import ContractsPage from './ContractsPage'

describe('ContractsPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<ContractsPage />)
    }).not.toThrow()
  })
})
