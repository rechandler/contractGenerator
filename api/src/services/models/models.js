import { db } from 'src/lib/db'
import { getCompany } from 'src/lib/contextHelpers'
import nhtsaApi, { paths } from 'src/lib/nhtsaApi'
import { requireAuth } from 'src/lib/auth'

/**
 * I really kinda hate this method. Essentially what we do is
 * take the results from the api and the results of from the database
 * to get a list of available models. The api results will only include
 * a name an no other values. This does guarantee that any new models
 * added in the future will automatically make it to the UI though.
 * @param {*} param
 * @returns
 */
export const models = async ({ input }) => {
  const { makeName } = input
  const company = await getCompany()

  const apiResults = await nhtsaApi.get(paths.makes, { makeName: makeName })
  const results = translate(apiResults, makeName)

  const make = await db.make.findUnique({ where: { makeName: makeName } })
  const dbResults = await db.model.findMany({
    where: {
      companyId: company.id,
      makeId: make.id,
    },
    include: {
      category: true,
    },
  })

  const dbHash = dbResults.reduce((acc, model) => {
    acc[model.name] = model
    return acc
  }, {})

  // We need to merge api results with db results.
  return results.map((model) => {
    return dbHash[model.name] ? dbHash[model.name] : model
  })
}

export const model = async ({ input }) => {
  const company = await getCompany()
  const companyId = company.id
  const { makeName, name } = input
  const decodedName = decodeURI(name)
  const make = await db.make.findUnique({ where: { makeName: makeName } })

  const result = await db.model.findUnique({
    where: {
      companyId_makeId_name: {
        companyId,
        makeId: make.id,
        name: decodedName,
      },
    },
    include: {
      category: true,
    },
  })

  return result || { name: decodedName }
}

/**
 * Inserts new models into the database. Ensures only one combination of
 * company, make, model can exist in database.
 * @param {*} param0
 * @returns
 */
export const updateModelCategoryInput = async ({ input }) => {
  const company = await getCompany()
  const make = await db.make.findUnique({ where: { makeName: input.makeName } })

  const models = Array.isArray(input.models) ? input.models : [input.models]

  return await db.$transaction(
    models.map((model) => {
      return db.model.upsert({
        where: {
          companyId_makeId_name: {
            companyId: company.id,
            makeId: make.id,
            name: model.name,
          },
        },
        update: {
          categoryId: input.categoryId,
        },
        create: {
          companyId: company.id,
          makeId: make.id,
          name: model.name,
          categoryId: input.categoryId,
        },
        include: {
          category: true,
        },
      })
    })
  )
}

export const deleteModelCategory = async ({ id }) => {
  return await db.model.delete({
    where: {
      id: id,
    },
  })
}

const translate = (apiModels, makeName) => {
  return apiModels
    .filter((model) => model.Make_Name === makeName)
    .map((model) => ({
      name: model.Model_Name,
    }))
}

export const beforeResolver = (rules) => {
  rules.add(requireAuth)
}
