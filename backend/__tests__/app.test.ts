import 'jest';
const request = require('supertest');
const fs = require('fs/promises');
const { app, countryData, userData, main, client, seed } = require('../moduleExports.js');

beforeEach(() => seed(countryData, userData));
afterAll(() => main().then(() => client.close()))

describe('Test Endpoints', () => {
    describe('/ - GET', () => {
        describe("status 200 - Success", () => {
            test('returns a list of all the current active endpoints with info when called', () => {
                return request(app).get('/api/').expect(200)
                    .then(async (response: object) => {
                        console.log(response)
                        let endpoints = await fs.readFile(`${__dirname}/../../endpoints.json`, 'utf8')
                        endpoints = JSON.parse(endpoints);
                        expect(typeof(endpoints)).toBe(typeof(response.body.endpoints));
                        expect(endpoints).toEqual(response.body.endpoints);
                    })
            })
        })
    })
})