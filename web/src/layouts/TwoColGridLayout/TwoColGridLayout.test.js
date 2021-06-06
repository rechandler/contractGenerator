import { render } from '@redwoodjs/testing'

import TwoColGridLayout from './TwoColGridLayout'

describe('TwoColGridLayout', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<TwoColGridLayout />)
    }).not.toThrow()
  })
})
