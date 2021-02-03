export default response => {
  const result = response.data.Results[0]

  return mapResult(result)
}

const mapResult = data => {
  return {
    vin: data.VIN,
    make: data.Make,
    model: data.Model,
    year: data.ModelYear,
    trim: data.Trim,
    engineSize: roundDisplacement(data.DisplacementL)
  }
}

const roundDisplacement = displacement => parseFloat(displacement).toPrecision(2)
