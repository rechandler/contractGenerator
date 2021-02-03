import { render } from '@redwoodjs/testing'

import VehicleInfo from './VehicleInfo'

describe('VehicleInfo', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<VehicleInfo />)
    }).not.toThrow()
  })
})
