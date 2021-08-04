import { db } from 'src/lib/db'
import { requireAuth } from 'src/lib/auth'
import { getCompany } from 'src/lib/contextHelpers'
import { ForbiddenError } from '@redwoodjs/api'
import { categoriesForCompany } from '../categories/categories'

export const sources = () => {
  return db.source.findMany()
}

export const Source = {
  company: (_obj, { root }) =>
    db.source.findUnique({ where: { id: root.id } }).company(),
  category: (_obj, { root }) =>
    db.source.findUnique({ where: { id: root.id } }).category(),
}

export const source = async ({ id }) => {
  const company = await getCompany()

  const source = await db.source.findUnique({
    where: { id },
    include: { categories: true },
  })
  if (company.id !== source.companyId) {
    throw new ForbiddenError("Can't fetch the Contract for the current Company")
  }
  return source
}

export const createSource = async () => {
  const company = await getCompany()

  return await db.source.create({
    data: {
      companyId: company.id,
    },
  })
}

export const createBasicInfo = async ({ id, input }) => {
  const categories = await categoriesForCompany()
  return await db.source.update({
    where: { id },
    data: {
      name: input.name,
      states: input.states,
      categories: {
        connect: input.categories.map((id) => ({ id })),
        disconnect: categories
          .map((category) => {
            return !input.categories.includes(category.id)
              ? { id: category.id }
              : null
          })
          .filter((item) => item),
      },
    },
  })
}

export const beforeResolver = (rules) => {
  rules.add(requireAuth)
}
