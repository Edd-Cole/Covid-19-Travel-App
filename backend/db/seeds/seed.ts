const { main: connection } = require("./connection");

const seed = async (countryData: object[], userData: object[]) => {
  // 1. drop collections
  return (
    connection()
      .then(async (db: any) => {
        await db.collection("countries").drop();
        await db.collection("users").drop();
        return db;
      })
      // 2. create collections
      .then(async (db: any) => {
        await db.createCollection("countries");
        await db.createCollection("users");
        return db;
      })
      // 3. populate collections - country data
      .then(async (db: any) => {
        await db.collection("countries").insertMany(countryData);
        return db;
      })
      // 4. populate collections - user data
      .then(async (db: any) => {
        await db.collection("users").insertMany(userData);
        return db;
      })
  );
};

module.exports = { seed };
