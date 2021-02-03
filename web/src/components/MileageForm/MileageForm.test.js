import { render } from '@redwoodjs/testing'

import MileageForm from './MileageForm'

describe('MileageForm', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<MileageForm />)
    }).not.toThrow()
  })
})
