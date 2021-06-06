import { render } from '@redwoodjs/testing'

import Models from './Models'

describe('Models', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<Models />)
    }).not.toThrow()
  })
})
