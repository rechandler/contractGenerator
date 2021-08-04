import { render } from '@redwoodjs/testing'

import Toc from './Term'

describe('Toc', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<Toc />)
    }).not.toThrow()
  })
})
