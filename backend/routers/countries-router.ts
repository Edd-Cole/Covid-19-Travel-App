const countriesRouter = require('express').Router();
const {
  getCountries: grabCountries,
  getCountry: grabCountry,
  addCountry: postCountry,
  patchCountry: updateCountry,
  getCountryByID: grabCountryByID,
  getCountriesWithID: grabCountriesWithID,
  deleteCountry: removeCountry
} = require('../controllers/countries.controllers');

countriesRouter.route('/').get(grabCountries).post(postCountry);
countriesRouter.route('/countries_with_id').get(grabCountriesWithID);
countriesRouter.route('/:country').get(grabCountry);
countriesRouter.route('/country/:id').get(grabCountryByID).patch(updateCountry).delete(removeCountry);

module.exports = { countriesRouter };
