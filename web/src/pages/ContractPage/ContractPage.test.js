import { render } from '@redwoodjs/testing'

import ContractPage from './ContractPage'

describe('ContractPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<ContractPage />)
    }).not.toThrow()
  })
})
