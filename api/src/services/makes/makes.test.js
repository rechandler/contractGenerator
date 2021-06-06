import { makes, make, createMake, updateMake, deleteMake } from './makes'

describe('makes', () => {
  scenario('returns all makes', async (scenario) => {
    const result = await makes()

    expect(result.length).toEqual(Object.keys(scenario.make).length)
  })

  scenario('returns a single make', async (scenario) => {
    const result = await make({ id: scenario.make.one.id })

    expect(result).toEqual(scenario.make.one)
  })

  scenario('creates a make', async (scenario) => {
    const result = await createMake({
      input: { makeName: 'String3846496', updatedAt: '2021-04-23T01:34:23Z' },
    })

    expect(result.makeName).toEqual('String3846496')
    expect(result.updatedAt).toEqual('2021-04-23T01:34:23Z')
  })

  scenario('updates a make', async (scenario) => {
    const original = await make({ id: scenario.make.one.id })
    const result = await updateMake({
      id: original.id,
      input: { makeName: 'String65783432' },
    })

    expect(result.makeName).toEqual('String65783432')
  })

  scenario('deletes a make', async (scenario) => {
    const original = await deleteMake({ id: scenario.make.one.id })
    const result = await make({ id: original.id })

    expect(result).toEqual(null)
  })
})
