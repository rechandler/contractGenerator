import { sources } from './sources'

describe('sources', () => {
  scenario('returns all sources', async (scenario) => {
    const result = await sources()

    expect(result.length).toEqual(Object.keys(scenario.source).length)
  })
})
