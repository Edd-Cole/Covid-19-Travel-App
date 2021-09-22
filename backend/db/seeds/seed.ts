const { main: connection } = require("./connection");

const seed = async (countryData: object[], userData: object[]) => {
  // 1. drop collections
  return connection()
      .then(async (db: any) => {
        await db.collection("countries").drop();
        await db.collection("users").drop();
      // 2. create collections
        await db.createCollection("countries");
        await db.createCollection("users");
      // 3. populate collections - country data & user data
        await db.collection("countries").insertMany(countryData);
        await db.collection("users").insertMany(userData);
        return db;
      })
};

module.exports = { seed };
