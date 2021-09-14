import "jest";
const request = require("supertest");
const fs = require("fs/promises");
const app = require("../app");
const countryData = require("../db/data/development_data/countryData");
const userData = require("../db/data/development_data/userData");
const { main } = require("../db/seeds/connection");
const { client } = require("../db/seeds/connection");
const seed = require("../db/seeds/seed");

console.log(typeof seed);
console.log(typeof main);
console.log(main);

beforeEach(() => seed(countryData, userData));
afterAll(() => main().then(() => client.close()));

describe("Test Endpoints", () => {
  describe("/ - GET", () => {
    describe("status 200 - Success", () => {
      test("returns a list of all the current active endpoints with info when called", () => {
        return request(app)
          .get("/api/")
          .expect(200)
          .then(async (response: any) => {
            console.log(response);
            let endpoints = await fs.readFile(
              `${__dirname}/../../endpoints.json`,
              "utf8"
            );
            endpoints = JSON.parse(endpoints);
            expect(typeof endpoints).toBe(typeof response.endpoints);
            expect(endpoints).toEqual(response.endpoints);
          });
      });
    });
  });
});
