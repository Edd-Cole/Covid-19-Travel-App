const countriesRouter = require('express').Router();
const {
  getCountries: grabCountries,
  getCountry: grabCountry,
  addCountry: postCountry
} = require('../controllers/countries.controllers');

countriesRouter.route('/').get(grabCountries).post(postCountry);
countriesRouter.route('/:country').get(grabCountry);

module.exports = { countriesRouter };
