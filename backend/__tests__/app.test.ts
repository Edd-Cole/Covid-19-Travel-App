import 'jest';
const request = require('supertest');
const fs = require('fs/promises');
const app = require('../app');
const { countryData, userData } = require('../db/data/test_data/index');
const { main, client } = require('../db/seeds/connection');
const { seed } = require('../db/seeds/seed');

beforeEach(() => seed(countryData, userData));
afterAll(() => main().then(() => client.close()));

describe('Test Endpoints', () => {
  describe('/ - GET', () => {
    describe('status 200 - Success', () => {
      test('returns a list of all the current active endpoints with info when called', () => {
        return request(app)
          .get('/api/')
          .expect(200)
          .then(async (response: any) => {
            let endpoints = await fs.readFile(
              `${__dirname}/../../endpoints.json`,
              'utf8'
            );
            endpoints = JSON.parse(endpoints);
            expect(typeof endpoints).toBe(typeof response.body.endpoints);
            expect(endpoints).toEqual(response.body.endpoints);
          });
      });
    });
  });

  describe('/countries', () => {
    describe('/ - GET', () => {
      describe('status 200 - success', () => {
        test('returns a list of country names', () => {
          return request(app)
            .get('/api/countries')
            .expect(200)
            .then((response: any) => {
              expect(response.body.countries).toEqual([
                'Denmark',
                'Germany',
                'Italy',
                'Portugal',
                'Spain',
                'Switzerland'
              ]);
            });
        });
      });
    });

    describe('/:country', () => {
      describe('/ - GET', () => {
        describe('status 200 - Success', () => {
          test('returns all the details of a country from the database using a country name', () => {
            return request(app)
              .get('/api/countries/italy')
              .expect(200)
              .then((response: any) => {
                expect(response.body.country).toEqual({
                  _id: expect.any(String),
                  country: 'italy',
                  colorList: 'amber',
                  entryRequirements: {
                    recoveryFromCovid: null,
                    withFullVaccination: {
                      acceptingVisitors: true,
                      daysInnoculatedBeforeEntry: 0,
                      test: {
                        maximumHoursBefore: 48
                      },
                      quarantine: {
                        numberOfDays: 0
                      },
                      documentsRequired: [
                        'Vaccination Status Proof',
                        'Negative Covid-19 Test'
                      ],
                      other: ['Complete online digital form']
                    },
                    withoutFullVaccination: {
                      acceptingVisitors: true,
                      test: {
                        maximumHoursBefore: 48
                      },
                      quarantine: {
                        numberOfDays: 5
                      },
                      documentsRequired: ['Negative Covid-19 Test'],
                      other: [
                        'Inform ASL where you will be quarantining',
                        'New negative test after quarantine period'
                      ]
                    }
                  },
                  restrictions: {
                    masks: {
                      isRequired: true,
                      moreInfo: 'Face masks are required in all yellow zones'
                    },
                    lockdowns: false,
                    socialDistancing: true,
                    groupMaximums: {
                      inside: 3,
                      outside: 0
                    }
                  },
                  hotspots: ['Rome', 'Milan', 'Venice', 'Naples'],
                  healthCareNumber:
                    'Call emergency healthline 112 - English operators available'
                });
              });
          });
        });
        describe('status 400 - Bad Request', () => {
          test('returns an error when given wrong type for parametric endpoint/data', () => {
            return request(app)
              .get('/api/countries/12')
              .expect(400)
              .then((response: any) => {
                expect(response.body.msg).toBe('Invalid Endpoint');
              });
          });
        });
        describe('status 404 - Not Found', () => {
          test('returns an error when given country that isnt in the database ', () => {
            return request(app)
              .get('/api/countries/moldova')
              .expect(404)
              .then((response: any) => {
                expect(response.body.msg).toEqual('Endpoint Not Found');
              });
          });
        });
      });
    });
  });

  describe('/users', () => {
    describe('/ - POST', () => {
      describe('status 201 - Created', () => {
        test('creates and returns a new user object when given a name, email and password', () => {
          return request(app)
            .post('/api/users')
            .send({
              name: 'Blaine Stella',
              email: 'bs@google.com',
              password: 'BlaineStella'
            })
            .then((response: any) => {
              expect(response.body.user).toEqual({
                name: 'Blaine Stella',
                email: 'bs@google.com',
                trips: [],
                pastTrips: []
              });
            });
        });
      });

      describe('status 400 - Bad request', () => {
        test('returns an error when trying to create a new account with an email that already exists in the database', () => {
          return request(app)
            .post('/api/users')
            .send({
              name: 'John Smith',
              email: 'js@google.com',
              password: 'password'
            })
            .expect(400)
            .then((response: any) => {
              expect(response.body.msg).toBe('Email already exists');
            });
        });
      });
    });
    describe('/:email', () => {
      describe('/ - POST', () => {
        describe('status 200 - Success', () => {
          test('Returns a user object given their email address', () => {
            return request(app)
              .post('/api/users/js@google.com')
              .send({ email: 'js@google.com', password: 'password' })
              .expect(200)
              .then((response: any) => {
                expect(response.body.user).toEqual({
                  name: 'John Smith',
                  email: 'js@google.com',
                  trips: [
                    {
                      country: 'france',
                      trafficLight: 'amber',
                      dateGoing: '2022.01.12',
                      dateReturning: '2022.01.24',
                      acceptingTourists: true,
                      vaccineRequired: true,
                      testRequired: true,
                      extraDocsRequired: true,
                      newInfo: false
                    },
                    {
                      country: 'greece',
                      trafficLight: 'amber',
                      dateGoing: '2022.05.03',
                      dateReturning: '2022.05.10',
                      acceptingTourists: true,
                      vaccineRequired: true,
                      testRequired: true,
                      extraDocsRequired: true,
                      newInfo: true
                    }
                  ],
                  pastTrips: [
                    {
                      country: 'poland',
                      dateGoing: '2021.12.02',
                      dateReturning: '2021.12.06'
                    }
                  ]
                });
              });
          });
        });
        describe('status 401 - unauthorised', () => {
          test('returns an error if passwords do not match', () => {
            return request(app)
              .post('/api/users/js@google.com')
              .send({ email: 'js@google.com', password: 'password-nope' })
              .expect(401)
              .then((res: any) => {
                expect(res.body.msg).toBe('Incorrect password');
              });
          });
        });

        describe('status 404 - not found', () => {
          test('returns a not found if email does not exist', () => {
            return request(app)
              .post('/api/users/e@123.com')
              .send({ email: 'e@123.com', password: 'password' })
              .expect(404)
              .then((res: any) => {
                expect(res.body.msg).toBe('User not found');
              });
          });
        });
      });

      describe('/ - DELETE', () => {
        describe('status 204 - Success, No Content', () => {
          test('deletes a user from the database', () => {
            return request(app).delete('/api/users/js@google.com').expect(204);
          });
        });

        describe('status 400 - Bad Request', () => {
          test('returns an error if the endpoint is not of the correct type', () => {
            return request(app)
              .delete('/api/users/1111111111100000000')
              .expect(400)
              .then((response: any) => {
                expect(response.body.msg).toBe('Not a valid email');
              });
          });
        });

        describe('status 404 - Not Found', () => {
          test('returns an error if email is not in the database', () => {
            return request(app)
              .delete('/api/users/el123@google.com')
              .expect(404)
              .then((response: any) => {
                expect(response.body.msg).toBe('User does not exist');
              });
          });
        });
      });

      describe.only('/ - PATCH', () => {
        describe('status 200 - Success', () => {
          test('returns a user with an updated name', () => {
            return request(app)
              .patch('/api/users/js@google.com')
              .send({ name: 'Dave' })
              .expect(200)
              .then((response: any) => {
                expect(response.body.user).toEqual({
                  name: 'Dave',
                  email: 'js@google.com',
                  trips: [
                    {
                      country: 'france',
                      trafficLight: 'amber',
                      dateGoing: '2022.01.12',
                      dateReturning: '2022.01.24',
                      acceptingTourists: true,
                      vaccineRequired: true,
                      testRequired: true,
                      extraDocsRequired: true,
                      newInfo: false
                    },
                    {
                      country: 'greece',
                      trafficLight: 'amber',
                      dateGoing: '2022.05.03',
                      dateReturning: '2022.05.10',
                      acceptingTourists: true,
                      vaccineRequired: true,
                      testRequired: true,
                      extraDocsRequired: true,
                      newInfo: true
                    }
                  ],
                  pastTrips: [
                    {
                      country: 'poland',
                      dateGoing: '2021.12.02',
                      dateReturning: '2021.12.06'
                    }
                  ]
                });
              });
          });
          test('resturns a user with an updated email', () => {
            return request(app)
            .patch('/api/users/js@google.com')
            .send({ email: 'new@email.com' })
            .expect(200)
            .then((res: any) => {
                expect(res.body.user).toEqual({
                    name: 'John Smith',
                    email: 'new@email.com',
                    trips: [
                        {
                            country: 'france',
                            trafficLight: 'amber',
                            dateGoing: '2022.01.12',
                            dateReturning: '2022.01.24',
                            acceptingTourists: true,
                            vaccineRequired: true,
                            testRequired: true,
                            extraDocsRequired: true,
                            newInfo: false
                        },
                        {
                            country: 'greece',
                            trafficLight: 'amber',
                            dateGoing: '2022.05.03',
                            dateReturning: '2022.05.10',
                            acceptingTourists: true,
                            vaccineRequired: true,
                            testRequired: true,
                            extraDocsRequired: true,
                            newInfo: true
                        }
                    ],
                    pastTrips: [
                        {
                            country: 'poland',
                            dateGoing: '2021.12.02',
                            dateReturning: '2021.12.06'
                        }
                    ]
                });
            })

        });

    })
        describe("status 400 - Bad Request", () => {
            test.only("user cannot set their password to their current password", () => {
                return request(app)
                .patch("/api/users/js@google.com")
                .send({password: "password"})
                .expect(400)
                .then((response: any) => {
                    expect(response.body.msg).toBe("Cannot use current password");
                  })
                })
            });
        });
      });
    });
  });
