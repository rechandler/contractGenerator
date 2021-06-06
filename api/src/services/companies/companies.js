import { db } from 'src/lib/db'

export const companies = () => {
  return db.company.findMany()
}

export const Company = {
  Dealerships: (_obj, { root }) =>
    db.company.findUnique({ where: { id: root.id } }).Dealerships(),
  Categories: (_obj, { root }) =>
    db.company.findUnique({ where: { id: root.id } }).Categories(),
  Models: (_obj, { root }) =>
    db.company.findUnique({ where: { id: root.id } }).Models(),
  Source: (_obj, { root }) =>
    db.company.findUnique({ where: { id: root.id } }).Source(),
}
