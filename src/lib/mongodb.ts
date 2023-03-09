// mongodb.js

import { Db, MongoClient } from 'mongodb'

interface IuseDb {
  error: undefined | Error,
  db: undefined | Db
}

if (!process.env.MONGODB_URI) {
  throw new Error('Missing MONGODB_URI in .env.local')
}
if (!process.env.MONGODB_DB_NAME) {
  throw new Error('Missing MONGODB_DB_NAME in .env.local')
}


let client: MongoClient | undefined
let db: Db | undefined

async function useDb(): Promise<IuseDb> {
  try {
    if (!client || !db) {
      client = await (new MongoClient(process.env.MONGODB_URI || 'DEFAULT')).connect()
      db = client.db(process.env.MONGODB_DB_NAME)
    }
    return { error: undefined, db}
  }
  catch (err) {
    return { error: (err as Error), db: undefined }
  }
}
export default useDb

