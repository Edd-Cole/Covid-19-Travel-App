const {
  fetchCountries: selectCountries,
  fetchCountry: selectCountry,
  insertCountry: createCountry
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
  countries = Array.isArray(countries) ? countries : [countries];
  return createCountry(countries)
    .then((countries: any) => {
      res.status(201).send({ countries });
    })
    .catch((err: object) => {
      next(err);
    });
};
