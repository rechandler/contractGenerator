import { db } from 'src/lib/db'
import { getCompany } from 'src/lib/contextHelpers'
import { requireAuth } from 'src/lib/auth'

export const terms = () => {
  return db.term.findMany()
}

export const termsForCompany = async () => {
  const company = await getCompany()
  return await db.term.findMany({ where: { companyId: company.id } })
}

// export const Term = {
//   company: (_obj, { root }) =>
//     db.term.findUnique({ where: { id: root.id } }).company(),
//   Sources: (_obj, { root }) =>
//     db.term.findUnique({ where: { id: root.id } }).Sources(),
//   Category: (_obj, { root }) =>
//     db.term.findUnique({ where: { id: root.id } }).Category(),
// }

export const createTerm = async ({ input }) => {
  const company = await getCompany()

  return await db.term.create({
    data: {
      ...input,
      companyId: company.id,
    },
  })
}

export const term = async ({ termId }) => {
  return await db.term.findUnique({
    where: {
      id: termId,
    },
  })
}

export const editTerm = async ({ input }) => {
  return await db.term.update({
    where: {
      id: input.id,
    },
    data: {
      ...input,
    },
  })
}

export const deleteTerm = async ({ termId }) => {
  return await db.term.delete({
    where: {
      id: termId,
    },
  })
}

export const beforeResolver = (rules) => {
  rules.add(requireAuth)
}
