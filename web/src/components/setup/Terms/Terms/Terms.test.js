import { render } from '@redwoodjs/testing'

import Terms from './Terms'

describe('Terms', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<Terms />)
    }).not.toThrow()
  })
})
