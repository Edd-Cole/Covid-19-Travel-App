import main from "./connection";

const seed = async (countryData: object[], userData: object[]) => {
  // 1. drop collections
  return main().then(async (db) => {
    await db.collection('countries').drop();
    await db.collection('users').drop();
    return db;
  })
  // 2. create collections
  .then(async (db) => {
      await db.createCollection('countries');
      await db.createCollection('users');
      return db;
  })
  // 3. populate collections
  .then(async (db) => {
      return db.collection('countries').insertOne()
    })
};

export default seed;