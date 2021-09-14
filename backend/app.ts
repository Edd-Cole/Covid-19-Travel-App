const express = require("express");
const { apiRouter: router } = require("./routers/api-router");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api", router);

module.exports = app;
