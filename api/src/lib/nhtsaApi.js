const axios = require('axios')

const host = 'https://vpic.nhtsa.dot.gov/api'
export const paths = {
  makes: '/vehicles/GetModelsForMake/%%makeName%%'
}

export const get = async (path, options) => {
  const url = host + transformPath(path, options) + '?format=json'
  const response = await axios.get(url)

  //Do some checking herer
  return response.data.Results
}

const transformPath = (path, options) => {
  for( const [key, value] of Object.entries(options)) {
    path = path.replace(`%%${key}%%`, value)
  }
  return path
}

export default {
  get
}
