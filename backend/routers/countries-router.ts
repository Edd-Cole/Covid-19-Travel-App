const countriesRouter = require('express').Router();
const {getCountries: grabCountries, getCountry: grabCountry} = require('../controllers/countries.controllers');

countriesRouter.route('/').get(grabCountries)
countriesRouter.route('/:country').get(grabCountry);

module.exports = {countriesRouter};