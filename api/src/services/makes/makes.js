import { db } from 'src/lib/db'

export const makes = () => {
  return db.make.findMany({
    where: { display: true },
    orderBy: { makeName: 'asc' }
  })
}

export const make = ({ id }) => {
  return db.make.findUnique({
    where: { id },
  })
}

export const createMake = ({ input }) => {
  return db.make.create({
    data: input,
  })
}

export const updateMake = ({ id, input }) => {
  return db.make.update({
    data: input,
    where: { id },
  })
}

export const deleteMake = ({ id }) => {
  return db.make.delete({
    where: { id },
  })
}

export const allMakes = () => {
  return db.make.findMany()
}
