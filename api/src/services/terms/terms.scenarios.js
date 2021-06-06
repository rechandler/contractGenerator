export const standard = defineScenario({
  term: {
    one: {
      name: 'String',
      months: 6365948,
      mileage: 9064089,
      company: { create: { name: 'String' } },
    },

    two: {
      name: 'String',
      months: 5251433,
      mileage: 9245518,
      company: { create: { name: 'String' } },
    },
  },
})
