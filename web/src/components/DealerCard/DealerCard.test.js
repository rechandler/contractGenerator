import { render } from '@redwoodjs/testing'

import DealerCard from './DealerCard'

describe('DealerCard', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<DealerCard />)
    }).not.toThrow()
  })
})
