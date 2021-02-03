import { render } from '@redwoodjs/testing'

import ContractGeneratorPage from './ContractGeneratorPage'

describe('ContractGeneratorPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<ContractGeneratorPage />)
    }).not.toThrow()
  })
})
