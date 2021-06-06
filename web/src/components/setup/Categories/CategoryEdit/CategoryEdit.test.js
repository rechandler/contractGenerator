import { render } from '@redwoodjs/testing'

import CategoryEdit from './CategoryEdit'

describe('CategoryEdit', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<CategoryEdit />)
    }).not.toThrow()
  })
})
