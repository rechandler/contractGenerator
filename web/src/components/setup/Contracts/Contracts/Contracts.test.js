import { render } from '@redwoodjs/testing'

import Contracts from './Contracts'

describe('Contracts', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<Contracts />)
    }).not.toThrow()
  })
})
