import { db } from 'src/lib/db'
import { requireAuth } from 'src/lib/auth'
import { getCompanyId } from 'src/lib/contextHelpers'

export const category = async ({ categoryId }) => {
  const category = await db.category.findUnique({ where: { id: categoryId } })
  return category
}

export const categoriesForCompany = async () => {
  const companyId = await getCompanyId()
  const company = await db.company.findUnique({
    where: { id: companyId },
    include: {
      Categories: {
        orderBy: {
          createdAt: 'asc',
        },
      },
    },
  })

  return company.Categories
}

export const updateCategory = async ({ input }) => {
  return await db.category.update({
    where: { id: input.id },
    data: { ...input },
  })
}

export const createCategory = async ({ input }) => {
  const companyId = await getCompanyId()
  return await db.company.update({
    where: {
      id: companyId,
    },
    data: {
      Categories: {
        create: { ...input },
      },
    },
  })
}

export const deleteCategory = async ({ id }) => {
  return await db.category.delete({
    where: { id },
  })
}

export const beforeResolver = (rules) => {
  rules.add(requireAuth)
}
