import { render } from '@redwoodjs/testing'

import NewCategory from './NewCategory'

describe('NewCategory', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<NewCategory />)
    }).not.toThrow()
  })
})
