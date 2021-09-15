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

  describe("/countries", () => {
      describe("/ - GET", () => {
          describe("status 200 - success", () => {
              test("returns a list of country names", () => {
                  return request(app)
                  .get("/api/countries")
                  .expect(200)
                  .then((response: any) => {
                    expect(response.body.countries).toEqual([
                            "Denmark",
                            "Germany",
                            "Italy",
                            "Portugal",
                            "Spain",
                            "Switzerland",
                    ])
                  })
              })
          })
      })

      describe("/:country", () => {
          describe("/ - GET", () => {
              describe("status 200 - Success", () => {
                  test.only("returns all the details of a country from the database using a country name", () => {
                      return request(app)
                      .get("/api/countries/italy")
                      .expect(200)
                      .then((response: any) => {
                          expect(response.body.country).toEqual(
                            {
                                "_id": expect.any(String),
                                "country": "italy",
                                "colorList": "amber",
                                "entryRequirements": {
                                  "recoveryFromCovid": null,
                                  "withFullVaccination": {
                                    "acceptingVisitors": true,
                                    "daysInnoculatedBeforeEntry": 0,
                                    "test": {
                                      "maximumHoursBefore": 48
                                    },
                                    "quarantine": {
                                      "numberOfDays": 0
                                    },
                                    "documentsRequired": [
                                      "Vaccination Status Proof",
                                      "Negative Covid-19 Test"
                                    ],
                                    "Other": ["Complete online digital form"]
                                  },
                                  "withoutFullVaccination": {
                                    "acceptingVisitors": true,
                                    "test": {
                                      "maximumHoursBefore": 48
                                    },
                                    "quarantine": {
                                      "numberOfDays": 5
                                    },
                                    "documentsRequired": ["Negative Covid-19 Test"],
                                    "other": [
                                      "Inform ASL where you will be quarantining",
                                      "New negative test after quarantine period"
                                    ]
                                  }
                                },
                                "restrictions": {
                                    "masks": {
                                      "isRequired": true,
                                      "moreInfo": "Face masks are required in all yellow zones"
                                    },
                                    "lockdowns": false,
                                    "socialDistancing": true,
                                    "groupMaximums": {
                                      "inside": 3,
                                      "outside": 0
                                    }
                                  },
                                  "hotspots": ["Rome", "Milan", "Venice", "Naples"],
                                  "healthCareNumber": "Call emergency healthline 112 - English operators available"
                            }                              
                          )
                      })
                  })
              })
          })
      })
  })
});
