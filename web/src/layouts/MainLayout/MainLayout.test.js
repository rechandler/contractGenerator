import { render } from '@redwoodjs/testing'

import MainLayoutLayout from './MainLayout'

describe('MainLayoutLayout', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<MainLayoutLayout />)
    }).not.toThrow()
  })
})
