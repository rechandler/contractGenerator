import { db } from 'src/lib/db'

export const sources = () => {
  return db.source.findMany()
}

export const Source = {
  company: (_obj, { root }) =>
    db.source.findUnique({ where: { id: root.id } }).company(),
  category: (_obj, { root }) =>
    db.source.findUnique({ where: { id: root.id } }).category(),
}

export const createSource = () => {

}
