import nhtsa from './nhtsa'

const mapping = {
  nhtsa,
}

export default (response, type) => {
  return mapping[type](response)
}
