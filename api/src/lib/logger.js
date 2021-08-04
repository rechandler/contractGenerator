import { createLogger, redactionsList } from '@redwoodjs/api/logger'

export const logger = createLogger({
  options: {
    redact: [...redactionsList, 'email', 'data.users[*].email'],
  },
})
