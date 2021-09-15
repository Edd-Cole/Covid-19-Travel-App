const { main: mongo } = require("../db/seeds/connection");

const fetchCountries = async () => {
  // Establish connection to the database and, using promises, manipulate info
  const db = await mongo().then(async (db: any) => {
      // Use info from the countries collection within DB, get all the documents inside
    const countries = await db.collection("countries")
      .find({})
      .toArray()
      .then((countryData: any) => {
          //  map and return the capitalised version of the country
        const countriesFromDB: string[] =  countryData.map((country: any) => {
            const capitalisedCountry = country.country[0].toUpperCase() + country.country.slice(1)
            return capitalisedCountry;
        });
        // sort into alphabetical order
        return countriesFromDB.sort();
      });
    return countries;
  });
  return db;
};
module.exports = { fetchCountries };
