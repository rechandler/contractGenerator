import { render } from '@redwoodjs/testing'

import ContractSelection from './ContractSelection'

describe('ContractSelection', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<ContractSelection />)
    }).not.toThrow()
  })
})
