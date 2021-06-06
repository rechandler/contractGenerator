import { companies } from './companies'

describe('companies', () => {
  scenario('returns all companies', async (scenario) => {
    const result = await companies()

    expect(result.length).toEqual(Object.keys(scenario.company).length)
  })
})
