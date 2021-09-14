import app from './app';
import { countryData, userData } from './db/data/test_data'
import main, { client } from './db/seeds/connection';
import seed from './db/seeds/seed';

module.export = { app, countryData, userData, main, client, seed };