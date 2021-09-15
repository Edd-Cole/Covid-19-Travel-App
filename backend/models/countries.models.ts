const { main: mongo } = require("../db/seeds/connection");

const fetchCountries = () => {
  // Establish connection to the database and, using promises, manipulate info
  return mongo().then((db: any) => {
      // Use info from the countries collection within DB, get all the documents inside
    return db.collection("countries")
      .find({})
      .sort({country: 1})
      .toArray()
      .then((countryData: any) => {
          //  map and return the capitalised version of the country
        return countryData.map((country: any) => {
            const capitalisedCountry = country.country[0].toUpperCase() + country.country.slice(1);
            return capitalisedCountry;
        });
      });
  });
};

module.exports = { fetchCountries };
