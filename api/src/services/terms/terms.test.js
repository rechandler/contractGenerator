import { terms } from './terms'

describe('terms', () => {
  scenario('returns all terms', async (scenario) => {
    const result = await terms()

    expect(result.length).toEqual(Object.keys(scenario.term).length)
  })
})
