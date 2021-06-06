import { render } from '@redwoodjs/testing'

import ContractSetupPage from './ContractSetupPage'

describe('ContractSetupPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<ContractSetupPage />)
    }).not.toThrow()
  })
})
