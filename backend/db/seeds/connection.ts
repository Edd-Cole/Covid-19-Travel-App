const { MongoClient } = require("mongodb");
const path = require("path");

//Connection URL
const url = "mongodb://localhost:27017";
const client = new MongoClient(url);

//Database name changes depending on whether tests are being run or not
const ENV = process.env.NODE_ENV || "development";

// if(ENV === "production") {
    
// }

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
const main = async () => {
  await client.connect();
  const db = client.db(dbName);
  return db;
};

module.exports = { client, main, url };


// const { MongoClient } = require('mongodb');
// const uri = "mongodb+srv://covid-travel-app:<password>@travel-app-data.1d4ta.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
// const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
// client.connect(err => {
//   const collection = client.db("test").collection("devices");
//   // perform actions on the collection object
//   client.close();
// });
