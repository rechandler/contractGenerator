import { render } from '@redwoodjs/testing'

import PricingStructure from './PricingStructure'

describe('PricingStructure', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<PricingStructure />)
    }).not.toThrow()
  })
})
