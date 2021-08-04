import { render } from '@redwoodjs/testing'

import ContractBasicInfo from './ContractBasicInfo'

describe('ContractBasicInfo', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<ContractBasicInfo />)
    }).not.toThrow()
  })
})
