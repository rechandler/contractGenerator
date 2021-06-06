import { db } from 'src/lib/db'
import { requireAuth } from 'src/lib/auth'

export const contracts = () => {
  return db.contract.findMany()
}

export const Contract = {
  User: (_obj, { root }) =>
    db.contract.findUnique({ where: { id: root.id } }).User(),
}

export const contractsByUser = async () => {
  requireAuth();
  const currentUser = context.currentUser
  const dealership = currentUser.user_metadata.currentDealership
  return await db.contract.findMany({
    where: {
      userId: currentUser.id,
      dealershipId: dealership.id
    }
  });
}

export const contract = async ({ id }) => {
  requireAuth();
  return await db.contract.findUnique({where: {id: id}});
}
