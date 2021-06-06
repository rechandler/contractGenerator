import { render } from '@redwoodjs/testing'

import Makes from './Makes'

describe('Makes', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<Makes />)
    }).not.toThrow()
  })
})
