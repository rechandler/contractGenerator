import {
  createGraphQLHandler,
  makeMergedSchema,
  makeServices,
} from '@redwoodjs/api'

import schemas from 'src/graphql/**/*.{js}'
import services from 'src/services/**/*.{js}'

import { getCurrentUser } from 'src/lib/auth'
import { db } from 'src/lib/db'

import { logger } from 'src/lib/logger'

export const handler = createGraphQLHandler({
  loggerConfig: { logger, options: {} },
  getCurrentUser,
  schema: makeMergedSchema({
    schemas,
    services: makeServices({ services }),
  }),
  onException: (error) => {
    console.log(error)
    // Disconnect from your database with an unhandled exception.
    db.$disconnect()
  },
})
