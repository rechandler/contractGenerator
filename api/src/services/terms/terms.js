import { db } from 'src/lib/db'
import { getCompany } from 'src/lib/contextHelpers'

export const terms = () => {
  return db.term.findMany()
}

export const Term = {
  company: (_obj, { root }) =>
    db.term.findUnique({ where: { id: root.id } }).company(),
  Sources: (_obj, { root }) =>
    db.term.findUnique({ where: { id: root.id } }).Sources(),
  Category: (_obj, { root }) =>
    db.term.findUnique({ where: { id: root.id } }).Category(),
}

export const createTerm = async ({ input }) => {
  const company = await getCompany()

  return await db.term.create({
    data: {
      ...input,
      companyId: company.id
    }
  })
}
