import { dealerships } from './dealerships'

describe('dealerships', () => {
  scenario('returns all dealerships', async (scenario) => {
    const result = await dealerships()

    expect(result.length).toEqual(Object.keys(scenario.dealership).length)
  })
})
