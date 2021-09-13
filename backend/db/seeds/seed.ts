import main from "./connection";

const seed = () => {
  // 1. drop collections
  return main().then((db) => {
    console.log(db, "<<<< database connection");
    db.countries.drop();
    db.users.drop();
    return db;
  })
  // 2. create collections
  .then((db) => {
      db.createCollection("countries");
      db.createCollection("users");
      return db;
  })
  // 3. populate collections
};

export default seed;