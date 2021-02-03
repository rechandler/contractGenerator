import { render } from '@redwoodjs/testing'

import BuyerInfo from './BuyerInfo'

describe('BuyerInfo', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<BuyerInfo />)
    }).not.toThrow()
  })
})
