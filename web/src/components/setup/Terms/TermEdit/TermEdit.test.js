import { render } from '@redwoodjs/testing'

import TermEdit from './TermEdit'

describe('TermEdit', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<TermEdit />)
    }).not.toThrow()
  })
})
