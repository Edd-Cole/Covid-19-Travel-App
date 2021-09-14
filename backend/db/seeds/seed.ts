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
  // 3. populate collections - country data
  .then(async (db) => {
      await db.collection('countries').insertMany(countryData);
      return db;
    })
  // 4. populate collections - user data
  .then((db) => {
    return db
  })
}

export default seed;