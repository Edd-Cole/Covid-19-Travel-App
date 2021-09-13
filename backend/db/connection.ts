const {MongoClient} = require('mongodb');
const path = require('path');

//Connection URL
const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);

//Database name
const ENV = process.env.NODE_ENV || 'development';
let dbSuffix = process.env.NODE_ENV || '';
if(dbSuffix !== '') {
    dbSuffix = '-' + dbSuffix;
}
const dbName = `covid-travel-app${dbSuffix}`;
require('dotenv').config({
    path: path.resolve(__dirname, `../.env.${ENV}`)
})

async function main() {
    // Use connect method to connect to the server
    await client.connect();
    console.log('Connected successfully to server');
    const db = client.db(dbName);
    const collection = db.collection('documents');
  
    // the following code examples can be pasted here...
  
    return 'done.';
  }