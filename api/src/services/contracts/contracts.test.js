import { contracts } from './contracts'

describe('contracts', () => {
  scenario('returns all contracts', async (scenario) => {
    const result = await contracts()

    expect(result.length).toEqual(Object.keys(scenario.contract).length)
  })
})
