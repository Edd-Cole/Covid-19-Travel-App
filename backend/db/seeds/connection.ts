const { MongoClient } = require("mongodb");
const path = require("path");

//Connection URL
const url = "mongodb://localhost:27017";
const client = new MongoClient(url);

//Database name changes depending on whether tests are being run or not
const ENV = process.env.NODE_ENV || "development";
let dbSuffix = process.env.NODE_ENV || "";

//adjust suffix if normal database connection isn't being established
if (dbSuffix !== "") {
  dbSuffix = "-" + dbSuffix;
}
const dbName = `covid-travel-app${dbSuffix}`;
require("dotenv").config({
  path: path.resolve(__dirname, `../.env.${ENV}`),
});

//Establish database connection asynchronously
async function main() {
  await client.connect();
  const db = client.db(dbName);
  return db;
}

export default main;
