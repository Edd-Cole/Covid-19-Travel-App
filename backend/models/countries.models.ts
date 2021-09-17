const { main: mongo } = require('../db/seeds/connection');

const fetchCountries = () => {
  // Establish connection to the database and, using promises, manipulate info
  return mongo().then((db: any) => {
    // Use info from the countries collection within DB, get all the documents inside
    return db
      .collection('countries')
      .find({})
      .sort({ country: 1 })
      .toArray()
      .then((countryData: any) => {
        //  map and return the capitalised version of the country
        return countryData.map((country: any) => {
          const capitalisedCountry =
            country.country[0].toUpperCase() + country.country.slice(1);
          return capitalisedCountry;
        });
      });
  });
};

const fetchCountry = (country: string) => {
  return mongo().then((db: any) => {
    return db
      .collection('countries')
      .findOne({ country: country })
      .then((countryObject: any) => {
        if (!countryObject && /\d/.test(country)) {
          return Promise.reject({ code: 400, msg: 'Invalid Endpoint' });
        } else if (!countryObject) {
          return Promise.reject({ code: 404, msg: 'Endpoint Not Found' });
        }
        delete countryObject._id;
        return countryObject;
      });
  });
};

const insertCountry = async ( countries: object[]) => {
  await mongo().then((db: any) => {
    return db.collection('countries').insertMany(countries);
  });
  return fetchCountries();
};

const fixCountry = async (_id: string, country: object ) => {
    await mongo().then((db: any) => {
        return db.collection('countries').updateOne({ _id  }, { $set: country })
    })

    return mongo().then(async (db: any) => {
        const country =  await db.collection('countries').findOne({ _id });
        console.log(country)
        return country
    })
}

module.exports = { fetchCountries, fetchCountry, insertCountry, fixCountry };
