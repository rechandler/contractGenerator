import { db } from 'src/lib/db'

export const dealerships = () => {
  return db.dealership.findMany()
}

export const Dealership = {
  users: (_obj, { root }) =>
    db.dealership.findUnique({ where: { id: root.id } }).users(),
}
