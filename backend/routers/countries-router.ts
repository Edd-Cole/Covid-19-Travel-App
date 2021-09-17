const countriesRouter = require('express').Router();
const {
  getCountries: grabCountries,
  getCountry: grabCountry,
  addCountry: postCountry,
  patchCountry: updateCountry
} = require('../controllers/countries.controllers');

countriesRouter.route('/').get(grabCountries).post(postCountry);
countriesRouter.route('/:country').get(grabCountry);
countriesRouter.route('/:_id').patch(updateCountry);

module.exports = { countriesRouter };
