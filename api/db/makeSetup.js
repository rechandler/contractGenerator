const { PrismaClient } = require('@prisma/client')
const https = require('https')
const dotenv = require('dotenv')

dotenv.config()
const db = new PrismaClient()

const main = async () => {
  let req1 = https.get(
    'https://vpic.nhtsa.dot.gov/api/vehicles/GetMakesForVehicleType/truck?format=json',
    (res) => {
      let data = ''
      res.on('data', (chunk) => {
        data += chunk
      })
      res.on('end', () => {
        JSON.parse(data).Results.forEach(async (r) => {
          await db.make.upsert({
            where: {
              makeName: r['MakeName'],
            },
            update: {},
            create: {
              makeName: r['MakeName'],
              display: false,
            },
          })
        })
      })
    }
  )
  req1.on('error', (e) => console.error(e))

  let req2 = https.get(
    'https://vpic.nhtsa.dot.gov/api/vehicles/GetMakesForVehicleType/car?format=json',
    (res) => {
      let data = ''
      res.on('data', (chunk) => {
        data += chunk
      })
      res.on('end', () => {
        JSON.parse(data).Results.forEach(async (r) => {
          await db.make.upsert({
            where: {
              makeName: r['MakeName'],
            },
            update: {},
            create: {
              makeName: r['MakeName'],
              display: false,
            },
          })
        })
      })
    }
  )
  req2.on('error', (e) => console.error(e))
}

main()
  .catch((e) => console.error(e))
  .finally(async () => {
    await db.$disconnect()
  })
