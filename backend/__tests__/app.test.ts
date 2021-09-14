const app = require('supertest');
import {countryData, userData} from '../db/data/test_data'
import main, { client } from '../db/seeds/connection';
import seed from '../db/seeds/seed';

beforeEach(() => seed(countryData, userData));
afterAll(() => main().then(() => client.close()))

describe('Test Endpoints', () => {
    
})