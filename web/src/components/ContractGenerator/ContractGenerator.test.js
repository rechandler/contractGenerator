import { render } from '@redwoodjs/testing'

import ContractGenerator from './ContractGenerator'

describe('ContractGenerator', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<ContractGenerator />)
    }).not.toThrow()
  })
})
