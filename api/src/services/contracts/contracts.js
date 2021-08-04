import { db } from 'src/lib/db'
import { requireAuth } from 'src/lib/auth'

export const contracts = () => {
  return db.contract.findMany()
}

export const Contract = {
  User: (_obj, { root }) =>
    db.contract.findUnique({ where: { id: root.id } }).User(),
  id: (_args, { root }) => root.id,
  vin: (_args, { root }) => root.vin,
  make: (_args, { root }) => root.make,
  model: (_args, { root }) => root.model,
  year: (_args, { root }) => root.year,
  ownersName: (_args, { root }) => root.ownersName,
  userId: (_args, { root }) => root.userId,
  createdAt: (_args, { root }) => root.createdAt,
  updatedAt: (_args, { root }) => root.updatedAt,
  ownersEmail: (_args, { root }) => root.ownersEmail,
}

export const contractsByUser = async () => {
  const currentUser = context.currentUser
  const dealership = currentUser.user_metadata.currentDealership
  return await db.contract.findMany({
    where: {
      userId: currentUser.id,
      dealershipId: dealership.id,
    },
  })
}

export const contract = async ({ id }) => {
  return await db.contract.findUnique({ where: { id } })
}

export const beforeResolver = (rules) => {
  rules.add(requireAuth)
}
