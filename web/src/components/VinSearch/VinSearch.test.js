import { render } from '@redwoodjs/testing'

import VinSearch from './VinSearch'

describe('VinSearch', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<VinSearch />)
    }).not.toThrow()
  })
})
