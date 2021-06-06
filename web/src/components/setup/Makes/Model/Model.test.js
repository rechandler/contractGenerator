import { render } from '@redwoodjs/testing'

import Model from './Model'

describe('Model', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<Model />)
    }).not.toThrow()
  })
})
