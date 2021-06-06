import { render } from '@redwoodjs/testing'

import Note from './Notes'

describe('Note', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<Note />)
    }).not.toThrow()
  })
})
