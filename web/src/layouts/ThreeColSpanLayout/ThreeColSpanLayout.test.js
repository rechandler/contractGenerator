import { render } from '@redwoodjs/testing'

import ThreeColSpanLayout from './ThreeColSpanLayout'

describe('ThreeColSpanLayout', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<ThreeColSpanLayout />)
    }).not.toThrow()
  })
})
