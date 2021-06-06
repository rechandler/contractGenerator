import { requireAuth } from 'src/lib/auth'
import { db } from 'src/lib/db'

export const users = () => {
  requireAuth()
  return db.user.findMany()
}

export const User = {
  dealerships: (_obj, { root }) =>
    db.user.findUnique({ where: { id: root.id } }).dealerships(),
  contracts: (_obj, { root }) =>
    db.user.findUnique({ where: { id: root.id } }).contracts(),
}

export const currentUser = () => {
  requireAuth()
  return context.currentUser
}
