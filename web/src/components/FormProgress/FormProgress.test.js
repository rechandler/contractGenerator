import { render } from '@redwoodjs/testing'

import FormProgress from './FormProgress'

describe('FormProgress', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<FormProgress />)
    }).not.toThrow()
  })
})
