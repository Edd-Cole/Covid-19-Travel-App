const express = require("express");
const { apiRouter: router } = require("./routers/api-router");
const {dbErrors: mongoErrors} = require("./errors/error-handling");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api", router);

app.use(mongoErrors)

module.exports = app;
