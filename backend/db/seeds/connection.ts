const { MongoClient } = require("mongodb");
const path = require("path");

//Connection URL
const url = "mongodb://localhost:27017";
let client = new MongoClient(url);

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

//if current value for ENV is production, set the database to mongo cloud
if(ENV === "production") {
    const uri = "mongodb+srv://covid-travel-app:Pmdm*o6S!4w9&^PWi'fg0@travel-app-data.1d4ta.mongodb.net/covid-travel-app?retryWrites=true&w=majority";
    client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
}

//Establish database connection asynchronously
const main = async () => {
  await client.connect();
  const db = client.db(dbName);
  return db;
};

module.exports = { client, main, url };
