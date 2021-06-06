import { render } from '@redwoodjs/testing'

import BigCard from './BigCard'

describe('BigCard', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<BigCard />)
    }).not.toThrow()
  })
})
