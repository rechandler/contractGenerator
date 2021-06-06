import { render } from '@redwoodjs/testing'

import MakeFormPage from './MakeFormPage'

describe('MakeFormPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<MakeFormPage />)
    }).not.toThrow()
  })
})
