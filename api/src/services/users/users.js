import { requireAuth } from 'src/lib/auth'
import { db } from 'src/lib/db'

export const users = () => {
  return db.user.findMany()
}

export const User = {
  dealerships: (_obj, { root }) =>
    db.user.findUnique({ where: { id: root.id } }).dealerships(),
  contracts: (_obj, { root }) =>
    db.user.findUnique({ where: { id: root.id } }).contracts(),
}

export const currentUser = () => {
  return context.currentUser
}

export const beforeResolver = (rules) => {
  rules.add(requireAuth)
}
