import { render } from '@redwoodjs/testing'

import ThreeColGridLayout from './ThreeColGridLayout'

describe('ThreeColGridLayout', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<ThreeColGridLayout />)
    }).not.toThrow()
  })
})
