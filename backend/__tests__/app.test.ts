import 'jest';
const request = require('supertest');
const fs = require('fs/promises');
const { app } = require('../app');
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

        describe('/ - POST', () => {
      describe('status 201 - Created', () => {
        test('it adds a new country into the database and returns an array of country names', () => {
          return request(app)
            .post('/api/countries')
            .send({
              countries: {
                country: 'Slovenia',
                colorList: 'green',
                entryRequirements: {
                  recoveryFromCovid: {
                    minDays: 11,
                    maxDays: 180
                  },
                  withFullVaccination: {
                    acceptingVisitors: true,
                    daysInnoculatedBeforeEntry: 14,
                    test: {
                      maximumHoursBefore: null
                    },
                    quarantine: {
                      numberOfDays: 0
                    },
                    documentsRequired: ['Vaccination Status Proof'],
                    other: []
                  },
                  withoutFullVaccination: {
                    acceptingVisitors: true,
                    test: {
                      maximumHoursBefore: 72
                    },
                    quarantine: {
                      numberOfDays: 10
                    },
                    documentsRequired: [
                      'PCR test no longer than 72 Hours old, or Antigen test no longer than 48 Hours old'
                    ],
                    other: []
                  }
                },
                restrictions: {
                  masks: {
                    isRequired: true,
                    moreInfo:
                      'Face masks are required in all enclosed public spaces and businesses'
                  },
                  lockdowns: false,
                  socialDistancing: true,
                  groupMaximums: {
                    inside: 50,
                    outside: 50
                  }
                }
              }
            })
            .expect(201)
            .then((res: any) => {
              expect(res.body.countries).toEqual([
                'Denmark',
                'Germany',
                'Italy',
                'Portugal',
                'Slovenia',
                'Spain',
                'Switzerland'
              ]);
            });
        });
        test('adds an array of countries into the database and returns an array of country names', () => {
          return request(app)
            .post('/api/countries')
            .send({
              countries: [
                {
                  country: 'Iceland',
                  colorList: 'green',
                  entryRequirements: {
                    recoveryFromCovid: {
                      minDays: 11,
                      maxDays: 180
                    },
                    withFullVaccination: {
                      acceptingVisitors: false,
                      daysInnoculatedBeforeEntry: null,
                      test: {
                        maximumHoursBefore: null
                      },
                      quarantine: {
                        numberOfDays: null
                      },
                      documentsRequired: [],
                      other: []
                    },
                    withoutFullVaccination: {
                      acceptingVisitors: false,
                      test: {
                        maximumHoursBefore: null
                      },
                      quarantine: {
                        numberOfDays: null
                      },
                      documentsRequired: [],
                      other: []
                    }
                  },
                  restrictions: {
                    masks: {
                      isRequired: true,
                      moreInfo:
                        'Face masks are required in all enclosed public spaces'
                    },
                    lockdowns: false,
                    socialDistancing: true,
                    groupMaximums: {
                      inside: null,
                      outside: null
                    }
                  }
                },

                {
                  country: 'Finland',
                  colorList: 'green',
                  entryRequirements: {
                    recoveryFromCovid: {
                      minDays: 11,
                      maxDays: 180
                    },
                    withFullVaccination: {
                      acceptingVisitors: true,
                      daysInnoculatedBeforeEntry: 14,
                      test: {
                        maximumHoursBefore: null
                      },
                      quarantine: {
                        numberOfDays: null
                      },
                      documentsRequired: ['Vaccination Status Proof'],
                      other: []
                    },
                    withoutFullVaccination: {
                      acceptingVisitors: true,
                      test: {
                        maximumHoursBefore: 72
                      },
                      quarantine: {
                        numberOfDays:
                          'If tested positive, case must self-isolate until test is negative'
                      },
                      documentsRequired: [
                        'Proof of Negative Test',
                        'Proof of COVID recovery'
                      ],
                      other: [
                        'If no documents provided regarding vaccination/testing, traveller must take a test no later than 24 hours after arrival'
                      ]
                    }
                  },
                  restrictions: {
                    masks: {
                      isRequired: true,
                      moreInfo:
                        'Face masks are required in all enclosed public spaces and businesses'
                    },
                    lockdowns: false,
                    socialDistancing: true,
                    groupMaximums: {
                      inside: null,
                      outside: null
                    }
                  }
                }
              ]
            })
            .expect(201)
            .then((res: any) => {
              expect(res.body.countries).toEqual([
                'Denmark',
                'Finland',
                'Germany',
                'Iceland',
                'Italy',
                'Portugal',
                'Spain',
                'Switzerland'
              ]);
            });
        });
      });

      describe('status 400 - Bad Request', () => {
        test('if the value on the countries key is not an object or an array, return an error', () => {
          return request(app)
            .post('/api/countries')
            .send({ countries: 'hello' })
            .expect(400)
            .then((res: any) => {
              expect(res.body.msg).toBe('Invalid Data');
            });
        });
      });
        });

        describe('/countries_with_id', () => {
        describe('/ - GET', () => {
            describe('status 200 - Success', () => {
                test('returns an object with countries and associated ids', () => {
                    return request(app)
                        .get('/api/countries/countries_with_id')
                        .expect(200)
                        .then((res: any) => {
                            expect(res.body.countries).toMatchObject({
                                'Denmark': expect.any(String),
                                'Germany': expect.any(String),
                                'Italy': expect.any(String),
                                'Portugal': expect.any(String),
                                'Spain': expect.any(String),
                                'Switzerland': expect.any(String)
                            })
                        })
                })
            })
        })
        })

        describe('/:country', () => {
        describe('/ - GET', () => {
          describe('status 200 - Success', () => {
            test('returns all the details of a country from the database using a country name', () => {
              return request(app)
                .get('/api/countries/Italy')
                .expect(200)
                .then((response: any) => {
                  expect(response.body.country).toEqual({
                    country: 'Italy',
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

        describe('/country', () => {
            describe('/delete_countries_collection', () => {
                describe('/ - DELETE', () => {
                    test('status 204 - Success, No Content', async() => {
                        await request(app).delete('/api/countries/country/delete_countries_collection').expect(204)

                        return main().then((db: any) => db.createCollection("countries")) //if running npm test for all, this is needed to recreate the collection, otherwise errors persist
                    })
                })
            });

            describe('/:id', () => {
                describe('/ - GET', () => {
                    describe('status 200 - Success', () => {
                        test('returns the country with the relevant country id', () => {
                            return request(app)
                                .get('/api/countries/country/123a456789bc')
                                .expect(200)
                                .then((res: any) => {
                                    expect(res.body.country.country).toBe('Portugal')
                                })
                        })
                    })
                })

                describe('/ - PATCH', () => {
                    describe('status 200 - Success', () => {
                        test("updates a country when given a relevant key-value pair", () => {
                            return request(app)
                                .patch('/api/countries/country/123a456789bc')
                                .send({})
                        })
                    })
                })
            })
        })
    })

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
                .send({ password: 'password' })
                .expect(200)
                .then((response: any) => {
                  expect(response.body.user).toEqual({
                    name: 'John Smith',
                    email: 'js@google.com',
                    trips: [
                      {
                        country: 'france',
                        trafficLight: 'amber',
                        dateGoing: expect.any(String),
                        dateReturning: expect.any(String),
                        acceptingTourists: true,
                        vaccineRequired: true,
                        testRequired: true,
                        extraDocsRequired: true,
                        newInfo: false
                      },
                      {
                        country: 'greece',
                        trafficLight: 'amber',
                        dateGoing: expect.any(String),
                        dateReturning: expect.any(String),
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
                        dateGoing: expect.any(String),
                        dateReturning: expect.any(String)
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
              return request(app)
                .delete('/api/users/js@google.com')
                .expect(204);
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

        describe('/ - PATCH', () => {
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
                        dateGoing: expect.any(String),
                        dateReturning: expect.any(String),
                        acceptingTourists: true,
                        vaccineRequired: true,
                        testRequired: true,
                        extraDocsRequired: true,
                        newInfo: false
                      },
                      {
                        country: 'greece',
                        trafficLight: 'amber',
                        dateGoing: expect.any(String),
                        dateReturning: expect.any(String),
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
                        dateGoing: expect.any(String),
                        dateReturning: expect.any(String)
                      }
                    ]
                  });
                });
            });

            test('returns a user with an updated email', () => {
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
                        dateGoing: expect.any(String),
                        dateReturning: expect.any(String),
                        acceptingTourists: true,
                        vaccineRequired: true,
                        testRequired: true,
                        extraDocsRequired: true,
                        newInfo: false
                      },
                      {
                        country: 'greece',
                        trafficLight: 'amber',
                        dateGoing: expect.any(String),
                        dateReturning: expect.any(String),
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
                        dateGoing: expect.any(String),
                        dateReturning: expect.any(String)
                      }
                    ]
                  });
                });
            });

            test('adds a new trip into the trips array with the array sorted by date in ascending order', () => {
              return request(app)
                .patch('/api/users/js@google.com')
                .send({
                  trip: {
                    country: 'ireland',
                    trafficLight: 'amber',
                    dateGoing: new Date(2022, 2, 28),
                    dateReturning: new Date(2022, 3, 10),
                    acceptingTourists: true,
                    vaccineRequired: true,
                    testRequired: true,
                    extraDocsRequired: true,
                    newInfo: false
                  }
                })
                .expect(200)
                .then((res: any) => {
                  expect(res.body.user).toEqual({
                    name: 'John Smith',
                    email: 'js@google.com',
                    trips: [
                      {
                        country: 'france',
                        trafficLight: 'amber',
                        dateGoing: expect.any(String),
                        dateReturning: expect.any(String),
                        acceptingTourists: true,
                        vaccineRequired: true,
                        testRequired: true,
                        extraDocsRequired: true,
                        newInfo: false
                      },
                      {
                        country: 'ireland',
                        trafficLight: 'amber',
                        dateGoing: expect.any(String),
                        dateReturning: expect.any(String),
                        acceptingTourists: true,
                        vaccineRequired: true,
                        testRequired: true,
                        extraDocsRequired: true,
                        newInfo: false
                      },
                      {
                        country: 'greece',
                        trafficLight: 'amber',
                        dateGoing: expect.any(String),
                        dateReturning: expect.any(String),
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
                        dateGoing: expect.any(String),
                        dateReturning: expect.any(String)
                      }
                    ]
                  });
                });
            });

            test('deletes a trip from the users trips', () => {
              return request(app)
                .patch('/api/users/js@google.com')
                .send({ deleteTrip: 1 })
                .expect(200)
                .then((res: any) => {
                  expect(res.body.user).toEqual({
                    name: 'John Smith',
                    email: 'js@google.com',
                    trips: [
                      {
                        country: 'france',
                        trafficLight: 'amber',
                        dateGoing: expect.any(String),
                        dateReturning: expect.any(String),
                        acceptingTourists: true,
                        vaccineRequired: true,
                        testRequired: true,
                        extraDocsRequired: true,
                        newInfo: false
                      }
                    ],
                    pastTrips: [
                      {
                        country: 'poland',
                        dateGoing: expect.any(String),
                        dateReturning: expect.any(String)
                      }
                    ]
                  });
                });
            });

            test('returns a user with a trip moved from trips into past trips, archiving process', () => {
              return request(app)
                .patch('/api/users/js@google.com')
                .send({ archiveTrip: 0 })
                .expect(200)
                .then((res: any) => {
                  expect(res.body.user).toEqual({
                    name: 'John Smith',
                    email: 'js@google.com',
                    trips: [
                      {
                        country: 'greece',
                        trafficLight: 'amber',
                        dateGoing: expect.any(String),
                        dateReturning: expect.any(String),
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
                        dateGoing: expect.any(String),
                        dateReturning: expect.any(String)
                      },
                      {
                        country: 'france',
                        dateGoing: expect.any(String),
                        dateReturning: expect.any(String)
                      }
                    ]
                  });
                });
            });

            test('Can patch multiple key/value pairs at once', () => {
              return request(app)
                .patch('/api/users/js@google.com')
                .send({
                  name: 'Dave',
                  email: 'new@email.com',
                  password: 'newPassword',
                  trip: {
                    country: 'ireland',
                    trafficLight: 'amber',
                    dateGoing: new Date(2022, 3, 10),
                    dateReturning: new Date(2022, 3, 17),
                    acceptingTourists: true,
                    vaccineRequired: true,
                    testRequired: true,
                    extraDocsRequired: true,
                    newInfo: false
                  },
                  deleteTrip: 0,
                  archiveTrip: 1
                })
                .then((res: any) => {
                  expect(res.body.user).toEqual({
                    name: 'Dave',
                    email: 'new@email.com',
                    trips: [
                      {
                        country: 'ireland',
                        trafficLight: 'amber',
                        dateGoing: expect.any(String),
                        dateReturning: expect.any(String),
                        acceptingTourists: true,
                        vaccineRequired: true,
                        testRequired: true,
                        extraDocsRequired: true,
                        newInfo: false
                      }
                    ],
                    pastTrips: [
                      {
                        country: 'poland',
                        dateGoing: expect.any(String),
                        dateReturning: expect.any(String)
                      },
                      {
                        country: 'greece',
                        dateGoing: expect.any(String),
                        dateReturning: expect.any(String)
                      }
                    ]
                  });
                });
            });
          });

          describe('status 400 - Bad Request', () => {
            test('user cannot set their password to their current password', () => {
              return request(app)
                .patch('/api/users/js@google.com')
                .send({ password: 'password' })
                .expect(400)
                .then((response: any) => {
                  expect(response.body.msg).toBe('Cannot use current password');
                });
            });

            test('returns an error if wrong type of email is used', () => {
              return request(app)
                .patch('/api/users/123456789')
                .send({ name: 'Dave' })
                .expect(400)
                .then((res: any) => {
                  expect(res.body.msg).toBe('Invalid Endpoint');
                });
            });
          });

          describe('status 404 - Not Found', () => {
            test('email does not exist in the database', () => {
              return request(app)
                .patch('/api/users/not@email.com')
                .send({ name: 'Dave' })
                .expect(404)
                .then((res: any) => {
                  expect(res.body.msg).toBe('User does not exist');
                });
            });
          });
        });
      });
      describe('/all_users', () => {
          describe('/ - GET', () => {
              describe('status 200 - Success', () => {
                  test('returns an array of user name and emails', () => {
                      return request(app).get('/api/users/all_users').expect(200)
                        .then((res: any) => {
                            expect(res.body.users).toEqual([    {
                                name: "John Smith",
                                email: "js@google.com"},
                                {name: "Edd Kleszcz",
                                email: "ek@sadballoons.com"},
                                {name: "Mahamud Arteh",
                                email: "ma@sadballoons.com"}])
                        })
                  })
              })
          })
      })
  });
});
