const DEFAULT = [{ pageName: 'Basic User Info', current: true }]

export const formTranslation = (formValues) => {
  const result = []
  for (const [key, value] of Object.entries(formValues)) {
    if (key.includes('contract_input_')) {
      result.push(value)
    }
  }
  return result.length ? result : DEFAULT
}

export const findCurrentPage = (formValues, idx) => {
  for (const [key, value] of Object.entries(formValues)) {
    if (key.includes('contract_input_')) {
      const keyParts = key.split('_')
      if (keyParts[keyParts.length - 1] == idx) {
        return value
      }
    }
  }
}
