import { notes } from './notes'

describe('notes', () => {
  scenario('returns all notes', async (scenario) => {
    const result = await notes()

    expect(result.length).toEqual(Object.keys(scenario.note).length)
  })
})
