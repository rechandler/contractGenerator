import { render } from '@redwoodjs/testing'

import LargeHeader from './LargeHeader'

describe('LargeHeader', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<LargeHeader />)
    }).not.toThrow()
  })
})
