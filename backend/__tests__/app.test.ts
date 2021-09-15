import "jest";
const request = require("supertest");
const fs = require("fs/promises");
const app = require("../app");
const countryData = require("../db/data/test_data/countryData");
const userData = require("../db/data/test_data/userData");
const { main, client, url } = require("../db/seeds/connection");
const { seed } = require("../db/seeds/seed");

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
            let endpoints = await fs.readFile(
              `${__dirname}/../../endpoints.json`,
              "utf8"
            );
            endpoints = JSON.parse(endpoints);
            expect(typeof endpoints).toBe(typeof response.body.endpoints);
            expect(endpoints).toEqual(response.body.endpoints);
          });
      });
    });
  });

  describe.only("/countries", () => {
      describe("/ - GET", () => {
          describe("status 200 - success", () => {
              test("returns a list of country names", () => {
                  return request(app).get("/api/countries").expect(200)
                  .then((response: any) => {
                    expect(response.body.countries).toEqual(["Portugal", "Spain", "Italy", "Germany", "Denmark", "Switzerland"].sort())
                  })
              })
          })
      })
  })
});
