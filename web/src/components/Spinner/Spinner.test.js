import { render } from '@redwoodjs/testing'

import Spinner from './Spinner'

describe('Spinner', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<Spinner />)
    }).not.toThrow()
  })
})
