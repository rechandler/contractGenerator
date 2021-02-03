import { render } from '@redwoodjs/testing'

import FormDisplay from './FormDisplay'

describe('FormDisplay', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<FormDisplay />)
    }).not.toThrow()
  })
})
