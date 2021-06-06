import { render } from '@redwoodjs/testing'

import ContractNew from './ContractNew'

describe('ContractNew', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<ContractNew />)
    }).not.toThrow()
  })
})
