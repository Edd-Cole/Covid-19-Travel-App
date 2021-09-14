const express = require("express");
const { apiRouter: router } = require("./routers/api-router");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

console.log("here")

app.use("/api", router);

module.exports = app;
