import { render } from '@redwoodjs/testing'

import OneColSpanLayout from './OneColSpanLayout'

describe('OneColSpanLayout', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<OneColSpanLayout />)
    }).not.toThrow()
  })
})
