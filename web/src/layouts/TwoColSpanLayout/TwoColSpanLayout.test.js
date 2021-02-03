import { render } from '@redwoodjs/testing'

import TwoColLayout from './TwoColSpanLayout'

describe('TwoColLayout', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<TwoColLayout />)
    }).not.toThrow()
  })
})
