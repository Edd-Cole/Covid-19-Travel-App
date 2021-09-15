const apiRouter = require("express").Router();
const {
  getEndpoints: grabEndpoints,
} = require("../controllers/controllers.api");
const { countriesRouter: apiCountries } = require("./countries-router");
const { usersRouter: apiUsers} = require("./users-router");

apiRouter.get("/", grabEndpoints);
apiRouter.use("/countries", apiCountries);
apiRouter.use("/users", apiUsers);

module.exports = { apiRouter };
