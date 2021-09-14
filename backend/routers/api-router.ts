const apiRouter = require("express").Router();
const {
  getEndpoints: grabEndpoints,
} = require("../controllers/controllers.api");

apiRouter.get("/", grabEndpoints);

module.exports = { apiRouter };
