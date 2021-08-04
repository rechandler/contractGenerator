import { db } from 'src/lib/db'
import { requireAuth } from 'src/lib/auth'

export const dealerships = () => {
  return db.dealership.findMany()
}

export const Dealership = {
  users: (_obj, { root }) =>
    db.dealership.findUnique({ where: { id: root.id } }).users(),
}

export const beforeResolver = (rules) => {
  rules.add(requireAuth)
}
