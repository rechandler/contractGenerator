import { render } from '@redwoodjs/testing'

import Categories from './Categories'

describe('Categories', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<Categories />)
    }).not.toThrow()
  })
})
