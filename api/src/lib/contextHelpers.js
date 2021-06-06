import { db } from 'src/lib/db'

export const getDealership = async () => {
  const currentDealershipId = context.currentUser.user_metadata.currentDealership.id
  return await db.dealership.findUnique({where: {id: currentDealershipId}})
}

export const getCompanyId = async () => {
  const dealership = await getDealership()
  return dealership.companyId
}

export const getCompany = async () => {
  const companyId = await getCompanyId()
  return await db.company.findUnique({ where: {id: companyId} })
}
