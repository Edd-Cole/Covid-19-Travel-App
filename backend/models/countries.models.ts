const ObjectId = require('mongodb').ObjectId

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
    //connect to databse and find the country
  return mongo().then((db: any) => {
    return db
      .collection('countries')
      .findOne({ country: country })
      .then((countryObject: any) => {
          //if endpoint is of wrong type, reject
        if (!countryObject && /\d/.test(country)) {
          return Promise.reject({ code: 400, msg: 'Invalid Endpoint' });
          //if endpoint does not exist, reject
        } else if (!countryObject) {
          return Promise.reject({ code: 404, msg: 'Endpoint Not Found' });
        }
        //delete id and send back
        delete countryObject._id;
        return countryObject;
      });
  });
};

const insertCountry = async ( countries: object[]) => {
    //Add a single or multiple array of countries to the collection
  await mongo().then((db: any) => {
    return db.collection('countries').insertMany(countries);
  });
  //send back an array of country names
  return fetchCountries();
};

const fixCountry = async (_id: string, country: object ) => {
    //create a new mongodb id object
    const new_id = new ObjectId(_id)
    //locate and update the document inside the database
    await mongo().then((db: any) => {
        return db.collection('countries').updateOne({ _id: new_id }, { $set: country })
    })
    
    //find the country, remove id and send back
    return mongo().then(async (db: any) => {
        const country =  await db.collection('countries').findOne({ _id: new_id });
        delete country._id;
        return country
    })
}

const fetchCountryByID = ( _id: any ) => {
    //create a new mongodb id object
    const new_id = new ObjectId(_id)
    //locate and return the country with the matching id, remove id and send back
    return mongo()
        .then(async (db: any) => {
            const country = await db.collection('countries').findOne({ _id: new_id })
            delete country._id;
            return country
        })
}

const fetchCountriesWithID = async() => {
    //create an empty object
    const countriesWithID: any = {}
    //create a variable with all the countries organised alphabetically, as an array of objects
    const countries = await mongo()
        .then((db: any) => {
            return db.collection('countries').find({}).sort({country: 1}).toArray()
        })
    //With each object in the array of countries, add the key: value pair as country: _id in the empty object above
    countries.forEach((country: any) => {
        countriesWithID[country.country] = country._id;
    });
    //send back key value pairs of country: _id
    return countriesWithID;
} 

const killCollection = () => {
    return mongo()
        .then((db: any) => {
            return db.collection('countries').drop();
        })
}

const insertCollection = () => {
    return mongo()
        .then((db: any) => {
            return db.createCollection('countries')
        })
}

module.exports = { fetchCountries, fetchCountry, insertCountry, fixCountry, fetchCountryByID, fetchCountriesWithID, killCollection, insertCollection };
