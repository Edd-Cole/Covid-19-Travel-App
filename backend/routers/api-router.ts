const apiRouter = require("express").Router();
import { getEndpoints } from "../controllers/controllers.api";

apiRouter.get("/", getEndpoints);

module.exports = apiRouter;
