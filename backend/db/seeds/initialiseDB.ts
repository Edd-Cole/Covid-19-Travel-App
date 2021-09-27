const {client: connect} = require('./connection');

const initialiseDB = async() => {
    await connect.connect();
    const db1 = await connect.db('covid-travel-app');
    const db2 = await connect.db('covid-travel-app-test');
    await db1.createCollection('users');
    await db1.createCollection('countries');
    await db2.createCollection('users');
    await db2.createCollection('countries');
}

initialiseDB();