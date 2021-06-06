import { render } from '@redwoodjs/testing'

import SecondaryLayout from './SecondaryLayout'

describe('SecondaryLayout', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<SecondaryLayout />)
    }).not.toThrow()
  })
})
