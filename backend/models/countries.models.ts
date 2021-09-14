const { main: mongo } = require("../db/seeds/connection");

const fetchCountries = async () => {
  const db = await mongo().then(async (db: any) => {
    const countries = db.collection("countries");
    const findResult = await countries
      .find({})
      .toArray()
      .then(async (countryData: any) => {
        const list: string[] = [];
        await countryData.map(async (country: any) => {
          list.push(
            country.country[0].toUpperCase() + country.country.slice(1)
          );
        });
        return list.sort();
      });
    return findResult;
  });
  return db;
};
module.exports = { fetchCountries };
