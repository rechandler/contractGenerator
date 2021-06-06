export const standard = defineScenario({
  source: {
    one: {
      name: 'String',
      company: { create: { name: 'String' } },
      category: {
        create: {
          name: 'String',
          yearsBack: 1941647,
          updatedAt: '2021-05-26T01:34:29Z',
          Company: { create: { name: 'String' } },
        },
      },
    },

    two: {
      name: 'String',
      company: { create: { name: 'String' } },
      category: {
        create: {
          name: 'String',
          yearsBack: 4921334,
          updatedAt: '2021-05-26T01:34:29Z',
          Company: { create: { name: 'String' } },
        },
      },
    },
  },
})
