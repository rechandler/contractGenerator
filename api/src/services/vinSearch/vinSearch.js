import axios from 'axios'
import apiMapper from './apiMapper/apiMapper'

export const vinSearch = async ({ vin }) => {
  return await getVehicle(vin)
}

const getVehicle = async (vin) => {
  var options = {
    method: 'GET',
    url: `https://vpic.nhtsa.dot.gov/api/vehicles/DecodeVinValuesExtended/${vin}`,
    params: { format: 'json' },
  }

  try {
    const response = await axios.request(options)
    return apiMapper(response, 'nhtsa')
  } catch (exception) {
    // Handle this better
    console.log(exception)
  }
}

export const beforeResolver = () => {}
