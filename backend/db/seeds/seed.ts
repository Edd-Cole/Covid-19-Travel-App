import main from "./connection";

const seed = async data => {
  // 1. drop collections
  return main().then(db => {
    console.log(db);
    // return db.countries.drop();
  });

  // 2. create collections
  // 3. populate collections
};
