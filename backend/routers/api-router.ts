const apiRouter = require("express").Router();
const {getEndpoints: grabEndpoints} = require("../controllers/controllers.api");
const {countriesRouter: apiCountries} = require('./countries-router');

console.log("here")

apiRouter.get("/", grabEndpoints);
apiRouter.use('/countries',apiCountries);

module.exports = { apiRouter };
