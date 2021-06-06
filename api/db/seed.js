/* eslint-disable no-console */
const { PrismaClient, dmmf } = require('@prisma/client')
const dotenv = require('dotenv')

dotenv.config()
const db = new PrismaClient()

const clearAllData = async () => {
  console.log('Deleting Previous Records ....')
  const modelNames = dmmf.datamodel.models.map(model => model.name.toLowerCase())
  console.log(modelNames)
  return Promise.all(modelNames.map(table => db[table].deleteMany()))
}

async function main() {

  //  await clearAllData()
  // Seed data is database data that needs to exist for your app to run.
  // Ideally this file should be idempotent: running it multiple times
  // will result in the same database state (usually by checking for the
  // existence of a record before trying to create it).

  const company = await db.company.create({
    data: {
      name: 'Company1'
    }
  })

  const dealership = await db.dealership.create({
    data: {
      name: 'Main Dealership',
      address: '7217 Smokey Hill Rd',
      city: 'Antioch',
      state: 'Tn',
      zip: '37013',
      phone: '615-210-8078',
      din: '12345',
      Company: {connect: {id: company.id}}
    }
  })
  const dealership2 = await db.dealership.create({
    data: {
      name: 'Secondary Dealership',
      address: '1234 Yoda rd',
      city: 'Nashville',
      state: 'Tn',
      zip: '37214',
      phone: '615-210-8078',
      din: '4321',
      Company: {connect: {id: company.id}}
    }
  })

  await db.contract.createMany({
    data: [
      {
        vin: '1HGCG2254WA015540',
        year: 1998,
        make: 'Honda',
        model: 'Accord',
        ownersName: "Jim Smith",
        ownersEmail: 'jim.smith@gmail.com',
        dealershipId: dealership.id
      },
      {
        vin: '1GNEK13T7YJ204464',
        year: 2000,
        make: 'Chevrolet',
        model: 'Tahoe',
        ownersName: 'Grogu Chandler',
        ownersEmail: 'jedi@ymail.com',
        dealershipId: dealership.id

      },
      {
        vin: 'JHLRD68404C018253',
        year: 2004,
        make: 'Honda',
        model: 'CRV',
        ownersName: 'Ethan Hawke',
        ownersEmail: 'actor123@gmail.com',
        dealershipId: dealership.id
      }
    ]
  })

  const contracts = await db.contract.findMany()

  await db.user.create({
    data: {
      email: 'ryann.chandler@gmail.com',
      firstName: 'Ryann',
      lastName: 'Chandler',
      photo: '',
      contracts: {
        connect: contracts.map(c => ({id: c.id}))
      },
      dealerships: {
        connect: [{id: dealership.id}, {id: dealership2.id}]
      }
    }
  });
}

main()
  .catch((e) => console.error(e))
  .finally(async () => {
    await db.$disconnect()
  })
