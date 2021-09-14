import main from "./connection";

const seed = () => {
  // 1. drop collections
  return main().then((db) => {
    db.collection('countries').drop();
    db.collection('users').drop();
    console.log('change')
    return db;
  })
  // 2. create collections
  .then((db) => {
      db.createCollection('countries');
      db.createCollection('users');
      return db;
  })
  // 3. populate collections
};

export default seed;