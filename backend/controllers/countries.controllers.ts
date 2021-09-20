const {
  fetchCountries: selectCountries,
  fetchCountry: selectCountry,
  insertCountry: createCountry,
  fixCountry: editCountry,
  fetchCountryByID: selectCountryByID,
  fetchCountriesWithID: selectCountriesWithID,
  killCollection: wipeCollection
} = require('../models/countries.models');

export const getCountries = (req: object, res: any, next: any) => {
  // Invoke the models function for this controller
  return selectCountries()
    .then((countries: string[]) => {
      // send with status 200 and wrapped in an object called countries
      res.status(200).send({ countries });
    })
    .catch((err: object) => {
      // Send error to error handling functions
      next(err);
    });
};

export const getCountry = (req: any, res: any, next: any) => {
  //Extract country from params
  const { country } = req.params;
  return selectCountry(country)
    .then((country: object) => {
      res.status(200).send({ country });
    })
    .catch((err: object) => {
      next(err);
    });
};

export const addCountry = (req: any, res: any, next: any) => {
  let { countries } = req.body;
  if (typeof countries !== 'object') {
    return next({ code: 400, msg: 'Invalid Data' });
  }
  countries = Array.isArray(countries) ? countries : [countries];
  return createCountry(countries)
    .then((countries: any) => {
      res.status(201).send({ countries });
    })
    .catch((err: object) => {
      next(err);
    });
};

export const getCountryByID = (req: any, res: any, next: any) => {
    const { id } = req.params
    console.log(id)
    return selectCountryByID(id)
        .then((country: any) => {
            res.status(200).send({ country })
        })
        .catch((err: object) => {
            next(err);
        })
}

export const patchCountry = (req: any, res: any, next: any) => {
    const { id } = req.params;
    const { country } = req.body;
    console.log(id)
    return editCountry(id, country)
    .then((country: object) => {
        return res.status(200).send({country});
    })
    .catch((err: object) => {
        next(err)
    })
}

export const getCountriesWithID = (req: any, res: any, next: any) => {
    return selectCountriesWithID()
        .then((countries: object) => {
            res.status(200).send({countries})
        })
        .catch((err: object) => {
            next(err)
        })
}

export const deleteCollection = (req: any, res: any, next: any) => {
    return wipeCollection()
        .then(() => {
            res.sendStatus(204)
        })
        .catch((err: object) => {
            next(err)
        })
}