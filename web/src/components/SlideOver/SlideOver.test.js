import { render } from '@redwoodjs/testing'

import SlideOver from './SlideOver'

describe('SlideOver', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<SlideOver />)
    }).not.toThrow()
  })
})
