import { render } from '@redwoodjs/testing'

import Toc from './Toc'

describe('Toc', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<Toc />)
    }).not.toThrow()
  })
})
