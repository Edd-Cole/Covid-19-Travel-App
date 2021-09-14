const countriesRouter = require('express').Router();
const {getCountries: grabCountries} = require('../controllers/countries.controllers');

countriesRouter.route('/').get(grabCountries)

module.exports = {countriesRouter};