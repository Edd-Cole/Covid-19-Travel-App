module.exports = [
  {
    country: "portugal",
    colorList: "amber",
    entryRequirements: {
      recoveryFromCovid: {
        minDays: 11,
        maxDays: 180,
      },
      withFullVaccination: {
        acceptingVisitors: true,
        daysInnoculatedBeforeEntry: 14,
        test: {
          maximumHoursBefore: 72,
        },
        quarantine: {
          numberOfDays: 0,
        },
        documentsRequired: [
          "Vaccination Status Proof",
          "Covid Recovery Certificate",
        ],
        other: ["Temperature Screening < 38 degrees on arrival"],
      },
      withoutFullVaccination: {
        acceptingVisitors: false,
        test: {
          maximumHoursBefore: null,
        },
        quarantine: {
          numberOfDays: null,
        },
        documentsRequired: [],
        other: null,
      },
    },
    restrictions: {
      masks: {
        isRequired: true,
        moreInfo: "Face masks are required in all enclosed public spaces",
      },
      lockdowns: false,
      socialDistancing: true,
      groupMaximums: {
        inside: 8,
        outside: 15,
      },
    },
    hotspots: ["Lisbon"],
    healthCareNumber: "(+351) 808 24 24 24, press 9 for English",
  },

  {
    country: "spain",
    colorList: "amber",
    entryRequirements: {
      recoveryFromCovid: null,
      withFullVaccination: {
        acceptingVisitors: true,
        daysInnoculatedBeforeEntry: 14,
        test: {
          maximumHoursBefore: 72,
        },
        quarantine: {
          numberOfDays: 0,
        },
        documentsRequired: [
          "Vaccination Status Proof",
          "Negative Covid-19 Test",
        ],
        other: [
          "Complete online Health Control Form within 48 hours of travel",
        ],
      },
      withoutFullVaccination: {
        acceptingVisitors: false,
        test: {
          maximumHoursBefore: null,
        },
        quarantine: {
          numberOfDays: null,
        },
        documentsRequired: [],
        other: null,
      },
    },
    restrictions: {
      masks: {
        isRequired: true,
        moreInfo:
          "Face masks are required in all enclosed public spaces, but not ouside spaces",
      },
      lockdowns: false,
      socialDistancing: true,
      groupMaximums: {
        inside: 4,
        outside: 6,
      },
    },
    hotspots: ["Madrid"],
    healthCareNumber: "Call regional healthcare provider",
  },

  {
    country: "italy",
    colorList: "amber",
    entryRequirements: {
      recoveryFromCovid: null,
      withFullVaccination: {
        acceptingVisitors: true,
        daysInnoculatedBeforeEntry: 0,
        test: {
          maximumHoursBefore: 48,
        },
        quarantine: {
          numberOfDays: 0,
        },
        documentsRequired: [
          "Vaccination Status Proof",
          "Negative Covid-19 Test",
        ],
        other: ["Complete online digital form"],
      },
      withoutFullVaccination: {
        acceptingVisitors: true,
        test: {
          maximumHoursBefore: 48,
        },
        quarantine: {
          numberOfDays: 5,
        },
        documentsRequired: ["Negative Covid-19 Test"],
        other: [
          "Inform ASL where you will be quarantining",
          "New negative test after quarantine period",
        ],
      },
    },
    restrictions: {
      masks: {
        isRequired: true,
        moreInfo: "Face masks are required in all yellow zones",
      },
      lockdowns: false,
      socialDistancing: true,
      groupMaximums: {
        inside: 3,
        outside: 0,
      },
    },
    hotspots: ["Rome", "Milan", "Venice", "Naples"],
    healthCareNumber:
      "Call emergency healthline 112 - English operators available",
  },

  {
    country: "germany",
    colorList: "green",
    withFullVaccination: {
      acceptingVisitors: true,
      daysInnoculatedBeforeEntry: null,
      test: {
        required: false,
      },
      quarantine: {
        required: false,
        numberOfDays: null,
      },
      documentsRequired: ["proof of residence (UK)", "proof of vaccination"],
      other: ["none"],
    },
    withoutFullVaccination: {
      acceptingVisitors:
        "conditionally - german residents, spouse/partner/child or a german citizen, important roles & urgent travel",
      daysInnoculatedBeforeEntry: null,
      test: {
        required: true,
        maximumHoursBefore: 72,
        acceptedTests: ["PCR", "LFD", "LAMP"],
      },
      quarantine: {
        required: true,
        numberOfDays: 10,
        "TTR (Test To Release)": true,
        whenAvailable: "5 days into quarantine",
      },
      documentsRequired: ["proof of residence (UK)", "negative test"],
      other: ["none"],
    },
    restrictions: {
      masks: {
        isRequired: true,
        moreInfo:
          "masks in densely populated areas, businesses that require them also",
      },
      lockdowns: false,
      socialDistancing: true,
      groupMaximum: {
        inside: null,
        outside: null,
      },
      hotspots: ["Berlin", "Hamburg", "Cologne"],
    },
  },

  {
    country: "denmark",
    colorList: "Green",
    entryRequirements: {
      recoveryFromCovid: {
        minDays: null,
        maxDays: null,
      },
      withFullVaccination: {
        acceptingVisitors: true,
        daysInnoculatedBeforeEntry: 14,
        test: {
          maximumHoursBefore: 72,
        },
        quarantine: {
          numberOfDays: 0,
        },
        documentsRequired: [
          "Vaccination Status Proof or Covid Recovery Certificate",
        ],
        other: null,
      },
      withoutFullVaccination: {
        acceptingVisitors: true,
        test: {
          maximumHoursBefore: 72,
        },
        quarantine: {
          numberOfDays: 10,
        },
        documentsRequired: ["Proof of negative test"],
        other: "test upon arrival, option to test-to-release after day 4",
      },
    },
    restrictions: {
      masks: {
        isRequired: true,
        moreInfo: "Face masks on public transport, including taxis and ferries",
      },
      lockdowns: false,
      socialDistancing: true,
      groupMaximums: {
        inside: 500,
        outside: 500,
      },
    },
    hotspots: ["Copenhagen", "Aarhus", "Herning"],
    healthCareNumber: "Danish authorities on their helpline (+45 7020 6044)",
  },

  {
    country: "switzerland",
    colorList: "green",
    withFullVaccination: {
      acceptingVisitors: true,
      daysInnoculatedBeforeEntry: null,
      test: {
        required: false,
      },
      quarantine: {
        required: false,
        numberOfDays: null,
      },
      documentsRequired: ["proof of residence (UK)", "proof of vaccination"],
      other: [null],
    },
    withoutFullVaccination: {
      acceptingVisitors:
        "conditionally - Swiss or Liechtenstein nationals, EU of EFTA nationals, residence permit holders, cross-border permit holders, FDFA legitimation card holders, D visa holders (Issues by Switzerland)",
      daysInnoculatedBeforeEntry: null,
      test: {
        required: true,
        maximumHoursBefore: 72,
        acceptedTests: ["PCR", "LFD", "LAMP"],
      },
      quarantine: {
        required: true,
        numberOfDays: 10,
        "TTR (Test To Release)": true,
        whenAvailable: "5 days into quarantine",
      },
      documentsRequired: [
        "proof of residence (UK)",
        "negative test/covid certificate/recovery within lat 6 months",
        "passenger locator form",
      ],
      other: [null],
    },
    restrictions: {
      masks: {
        isRequired: true,
        moreInfo:
          "masks in densely populated areas, businesses that require them also",
      },
      lockdowns: false,
      socialDistancing: true,
      contactTracing: true,
      groupMaximum: {
        inside: null,
        outside: null,
      },
      hotspots: ["Geneva", "Zurich"],
    },
  },

  {
    country: "greece",
    colorList: "amber",
    entryRequirements: {
      recoveryFromCovid: {
        minDays: 30,
        maxDays: 180,
      },
      withFullVaccination: {
        acceptingVisitors: true,
        daysInnoculatedBeforeEntry: 14,
        test: {
          maximumHoursBefore: 72,
        },
        quarantine: {
          numberOfDays: 0,
        },
        documentsRequired: [
          "Vaccination Status Proof",
          "Negative Covid-19 Test",
          "Passenge Locator Form",
        ],
        other: [
          "Complete online Health Control Form within 48 hours of travel",
        ],
      },
      withoutFullVaccination: {
        acceptingVisitors: true,
        test: {
          maximumHoursBefore: 72,
        },
        quarantine: {
          numberOfDays: 0,
        },
        documentsRequired: ["Passenge Locator Form", "Negative Covid-19 Test"],
        other: null,
      },
    },
    restrictions: {
      masks: {
        isRequired: true,
        moreInfo:
          "Face masks are required in all indoor spaces and communal spaces but not ouside spaces",
      },
      lockdowns: false,
      socialDistancing: true,
      groupMaximums: {
        inside: 3,
        outside: 6,
      },
    },
    hotspots: ["Meesinia", "Achaia", "Peloponnese", "Ikaria", "Crete"],
    healthCareNumber: "Call healthcare on 210 521 2054",
  },

  {
    country: "belgium",
    colorList: "amber",
    entryRequirements: {
      recoveryFromCovid: {
        minDays: 30,
        maxDays: 180,
      },
      withFullVaccination: {
        acceptingVisitors: true,
        daysInnoculatedBeforeEntry: 0,
        test: {
          maximumHoursBefore: 72,
        },
        quarantine: {
          numberOfDays: 5,
        },
        documentsRequired: [
          "Vaccination Status Proof",
          "Negative Covid-19 Test",
          "Passenge Locator Form",
        ],
        other: [
          "Take test on arrival and quarantine until negative result received",
          "Take test on day 7 of trip",
        ],
      },
      withoutFullVaccination: {
        acceptingVisitors: false,
        test: {
          maximumHoursBefore: null,
        },
        quarantine: {
          numberOfDays: null,
        },
        documentsRequired: [],
        other: null,
      },
    },
    restrictions: {
      masks: {
        isRequired: true,
        moreInfo:
          "Face masks are required in all indoor spaces and communal spaces but not ouside spaces",
      },
      lockdowns: false,
      socialDistancing: true,
      groupMaximums: {
        inside: 8,
        outside: 20,
      },
    },
    hotspots: [],
    healthCareNumber: "Call healthcare line on 100",
  },

  {
    country: "austria",
    colorList: "green",
    withFullVaccination: {
      acceptingVisitors: true,
      daysInnoculatedBeforeEntry: 14,
      test: {
        required: false,
      },
      quarantine: {
        required: false,
        numberOfDays: null,
      },
      documentsRequired: ["proof of vaccination"],
      other: [null],
    },
    withoutFullVaccination: {
      acceptingVisitors: true,
      daysInnoculatedBeforeEntry: null,
      test: {
        required: true,
        maximumHoursBefore: 72,
        acceptedTests: ["PCR", "LFD"],
      },
      quarantine: {
        required: true,
        numberOfDays: 10,
        "TTR (Test To Release)": true,
        whenAvailable: "5 days into quarantine",
      },
      documentsRequired: ["negative test (within last 72hours)"],
      other: [null],
    },
    restrictions: {
      masks: {
        isRequired: true,
        moreInfo:
          "masks on public transport and in other public spaces, PCR tests must be taken for Restaurant entry",
      },
      lockdowns: false,
      socialDistancing: true,
      contactTracing: true,
      groupMaximum: {
        inside: null,
        outside: null,
      },
      hotspots: ["Vienna", "Vorarlberg"],
    },
  },

  {
    country: "bulgaria",
    colorList: "green",
    withFullVaccination: {
      acceptingVisitors:
        "conditional - Family members of citizens, students with D-visas & Bulgarian Nationals",
      daysInnoculatedBeforeEntry: 14,
      test: {
        required: true,
        maximumHoursBefore: 72,
      },
      quarantine: {
        required: false,
        numberOfDays: null,
      },
      documentsRequired: [
        "proof of vaccination (Vaccine Declaration COVID-19 Form)",
      ],
      other: [
        "certificate of COVID recovery, negative test within last 72 hours",
      ],
    },
    withoutFullVaccination: {
      acceptingVisitors:
        "conditional - Family members of citizens, students with D-visas & Bulgarian Nationals",
      daysInnoculatedBeforeEntry: 14,
      test: {
        required: null,
        maximumHoursBefore: null,
        acceptedTests: [null],
      },
      quarantine: {
        required: true,
        numberOfDays: 10,
        "TTR (Test To Release)": null,
        whenAvailable: null,
      },
      documentsRequired: [
        "proof of negative COVID test (within 72 hours of arrival)",
      ],
      other: [null],
    },
    restrictions: {
      masks: {
        isRequired: true,
        moreInfo:
          "masks on public transport, in businesses and other public spaces",
      },
      lockdowns: false,
      socialDistancing: true,
      contactTracing: true,
      groupMaximum: {
        inside: null,
        outside: null,
      },
      hotspots: ["Sofia", "Plovdiv"],
    },
  },

  {
    country: "cyprus",
    colorList: "green",
    withFullVaccination: {
      acceptingVisitors: true,
      daysInnoculatedBeforeEntry: 14,
      test: {
        required: false,
        maximumHoursBefore: null,
      },
      quarantine: {
        required: false,
        numberOfDays: null,
      },
      documentsRequired: ["Full Vaccination Certificate for COVID-19"],
      other: ["Cyprus Flight Pass"],
    },
    withoutFullVaccination: {
      acceptingVisitors: true,
      daysInnoculatedBeforeEntry: null,
      test: {
        required: true,
        maximumHoursBefore: 48,
        acceptedTests: ["PCR", "LFD"],
      },
      quarantine: {
        required: true,
        numberOfDays: 5,
        "TTR (Test To Release)": null,
        whenAvailable: null,
      },
      documentsRequired: ["Test certificate no longer than 72 hours old"],
      other: ["Cyprus Flight Pass"],
    },
    restrictions: {
      masks: {
        isRequired: true,
        moreInfo:
          "masks on public transport, in businesses and other public spaces, such as busy venues",
      },
      lockdowns: false,
      socialDistancing: true,
      contactTracing: true,
      groupMaximum: {
        inside: null,
        outside: null,
      },
      hotspots: ["Split", "Dubrovnik"],
    },
  },

  {
    country: "croatia",
    colorList: "green",
    withFullVaccination: {
      acceptingVisitors: true,
      daysInnoculatedBeforeEntry: 14,
      test: {
        required: true,
        maximumHoursBefore: 72,
      },
      quarantine: {
        required: false,
        numberOfDays: null,
      },
      documentsRequired: [
        "Test certificate no longer than 72 hours old, regardless of vaccination status",
      ],
      other: ["Online entry form to be filled before travel"],
    },
    withoutFullVaccination: {
      acceptingVisitors: true,
      daysInnoculatedBeforeEntry: null,
      test: {
        required: true,
        maximumHoursBefore: 48,
        acceptedTests: ["PCR", "LFD"],
      },
      quarantine: {
        required: true,
        numberOfDays: 10,
        "TTR (Test To Release)": false,
        whenAvailable: null,
      },
      documentsRequired: ["Test certificate no longer than 72 hours old"],
      other: ["Online entry form to be filled before travel"],
    },
    restrictions: {
      masks: {
        isRequired: true,
        moreInfo:
          "masks on public transport, in businesses and other public spaces",
      },
      lockdowns: false,
      socialDistancing: true,
      contactTracing: true,
      groupMaximum: {
        inside: null,
        outside: null,
      },
      hotspots: ["plit", "Dubrovnik"],
    },
  },

  {
    country: "ireland",
    colorList: "green",
    withFullVaccination: {
      acceptingVisitors: true,
      daysInnoculatedBeforeEntry: 14,
      test: {
        required: false,
      },
      quarantine: {
        required: false,
        numberOfDays: null,
      },
      documentsRequired: [
        "Passenger Locator Form",
        "UK proof of Covid-19 Full Vaccination",
      ],
      other: [null],
    },
    withoutFullVaccination: {
      acceptingVisitors: "conditionally - Quarantine and Testing Required",
      daysInnoculatedBeforeEntry: null,
      test: {
        required: true,
        maximumHoursBefore: 72,
        acceptedTests: ["PCR", "LFD"],
      },
      quarantine: {
        required: true,
        numberOfDays: 14,
        "TTR (Test To Release)": null,
        whenAvailable: null,
      },
      documentsRequired: ["negative test (within last 72hours)"],
      other: [null],
    },
    restrictions: {
      masks: {
        isRequired: true,
        moreInfo: "masks on public transport and in other public spaces",
      },
      lockdowns: false,
      socialDistancing: true,
      contactTracing: true,
      groupMaximum: {
        inside: null,
        outside: null,
      },
      hotspots: ["Derry City", "Donegal"],
    },
  },

  {
    country: "lithuania",
    colorList: "green",
    withFullVaccination: {
      acceptingVisitors: true,
      daysInnoculatedBeforeEntry: 14,
      test: {
        required: false,
      },
      quarantine: {
        required: false,
        numberOfDays: null,
      },
      documentsRequired: [
        "proof of vaccination",
        "online registration at least 48-hours before beginning journey",
      ],
      other: [null],
    },
    withoutFullVaccination: {
      acceptingVisitors: "conditionally - quarantine and testing required",
      daysInnoculatedBeforeEntry: null,
      test: {
        required: true,
        maximumHoursBefore: 72,
        acceptedTests: ["PCR"],
      },
      quarantine: {
        required: true,
        numberOfDays: 10,
        "TTR (Test To Release)": true,
        whenAvailable: "7 days into quarantine",
      },
      documentsRequired: [
        "negative test (within last 72hours)",
        "online registration at least 48-hours before beginning journey",
      ],
      other: [null],
    },
    restrictions: {
      masks: {
        isRequired: true,
        moreInfo: "masks on public transport and in other public spaces",
      },
      lockdowns: false,
      socialDistancing: true,
      contactTracing: true,
      groupMaximum: {
        inside: null,
        outside: null,
      },
      hotspots: ["Vilnius", "Kaunas"],
    },
  },

  {
    country: "netherlands",
    colorList: "green",
    withFullVaccination: {
      acceptingVisitors: true,
      daysInnoculatedBeforeEntry: 14,
      test: {
        required: true,
        maximumHoursBefore: 48,
      },
      quarantine: {
        required: false,
        numberOfDays: null,
      },
      documentsRequired: [
        "proof of vaccination (Vaccine Declaration COVID-19 Form)",
      ],
      other: ["Health Screening Form to be filled before making journey"],
    },
    withoutFullVaccination: {
      acceptingVisitors:
        "conditional - only if exempt or for a compelling reason",
      daysInnoculatedBeforeEntry: null,
      test: {
        required: true,
        maximumHoursBefore: 48,
        acceptedTests: ["PCR"],
      },
      quarantine: {
        required: true,
        numberOfDays: 10,
        "TTR (Test To Release)": null,
        whenAvailable: null,
      },
      documentsRequired: ["negative test (within last 48 hours)"],
      other: ["Health Screening Form to be filled before making journey"],
    },
    restrictions: {
      masks: {
        isRequired: true,
        moreInfo:
          "masks on public transport, in businesses and other public spaces",
      },
      lockdowns: false,
      socialDistancing: true,
      contactTracing: true,
      groupMaximum: {
        inside: null,
        outside: null,
      },
      hotspots: ["Amsterdam", "Rotterdam"],
    },
  },

  {
    country: "romania",
    colorList: "green",
    withFullVaccination: {
      acceptingVisitors: true,
      daysInnoculatedBeforeEntry: 14,
      test: {
        required: false,
      },
      quarantine: {
        required: false,
        numberOfDays: null,
      },
      documentsRequired: ["proof of vaccination"],
      other: [null],
    },
    withoutFullVaccination: {
      acceptingVisitors:
        "conditionally - testing + 14 days must pass since date of confirmation for entry into the country",
      daysInnoculatedBeforeEntry: null,
      test: {
        required: true,
        maximumHoursBefore: 72,
        acceptedTests: ["PCR"],
      },
      quarantine: {
        required: true,
        numberOfDays: 14,
        "TTR (Test To Release)": null,
        whenAvailable: null,
      },
      documentsRequired: ["negative test (within last 72hours)"],
      other: [null],
    },
    restrictions: {
      masks: {
        isRequired: true,
        moreInfo:
          "masks on public transport and in other public spaces, social distancing also in place (6 feet)",
      },
      lockdowns: false,
      socialDistancing: true,
      contactTracing: true,
      groupMaximum: {
        inside: null,
        outside: null,
      },
      hotspots: ["Bucuresti", "Cluj"],
    },
  },

  {
    country: "france",
    colorList: "amber",
    entryRequirements: {
      recoveryFromCovid: {
        minDays: 11,
        maxDays: 180,
      },
      withFullVaccination: {
        acceptingVisitors: true,
        daysInnoculatedBeforeEntry: 7,
        test: {
          maximumHoursBefore: 24,
        },
        quarantine: {
          numberOfDays: 0,
        },
        documentsRequired: [
          "Vaccination Status Proof and self-certifying sworn statement",
        ],
        maximumHoursBefore: 24,
      },
      quarantine: {
        numberOfDays: 7,
      },
      documentsRequired: [
        "International travel certificate",
        "self-certifying sworn statement",
      ],
      other: "essential travel only if unvaccinated",
      isRequired: "true",
      moreInfo:
        "Face masks are required in all enclosed public spaces. It is no longer a requirement to wear a mask in all outdoor public spaces, with some exceptions, including gatherings, queues, markets, and stadiums. Wearing masks on public transport is compulsory for all users aged 11 and over, with fines for those who are not compliant. Masks are also compulsory in taxis and private hire vehicles without a plexiglass screen",
    },
    lockdowns: "false",
    socialDistancing: true,
    groupMaximums: {
      inside: null,
      outside: null,
    },
    hotspots: [],
    healthCareNumber: 112,
  },

  {
    country: "sweden",
    colorList: "amber",
    entryRequirements: {
      recoveryFromCovid: {
        minDays: null,
        maxDays: null,
      },
      withFullVaccination: {
        acceptingVisitors: false,
        daysInnoculatedBeforeEntry: null,
        test: {
          maximumHoursBefore: null,
        },
        quarantine: {
          numberOfDays: null,
        },
        documentsRequired: null,
        other: [],
      },
      withoutFullVaccination: {
        acceptingVisitors: false,
        test: {
          maximumHoursBefore: null,
        },
        quarantine: {
          numberOfDays: null,
        },
        documentsRequired: [],
        other: null,
      },
    },
    restrictions: {
      masks: {
        isRequired: null,
        moreInfo: null,
      },
      lockdowns: false,
      socialDistancing: true,
      groupMaximums: {
        inside: 8,
        outside: "no limit",
      },
    },
  },

  {
    country: "slovenia",
    colorList: "green",
    entryRequirements: {
      recoveryFromCovid: {
        minDays: 11,
        maxDays: 180,
      },
      withFullVaccination: {
        acceptingVisitors: true,
        daysInnoculatedBeforeEntry: 14,
        test: {
          maximumHoursBefore: null,
        },
        quarantine: {
          numberOfDays: 0,
        },
        documentsRequired: ["Vaccination Status Proof"],
        other: [],
      },
      withoutFullVaccination: {
        acceptingVisitors: true,
        test: {
          maximumHoursBefore: 72,
        },
        quarantine: {
          numberOfDays: 10,
        },
        documentsRequired: [
          "PCR test no longer than 72 Hours old, or Antigen test no longer than 48 Hours old",
        ],
        other: [],
      },
    },
    restrictions: {
      masks: {
        isRequired: true,
        moreInfo:
          "Face masks are required in all enclosed public spaces and businesses",
      },
      lockdowns: false,
      socialDistancing: true,
      groupMaximums: {
        inside: 50,
        outside: 50,
      },
    },
  },

  {
    country: "slovakia",
    colorList: "green",
    entryRequirements: {
      recoveryFromCovid: {
        minDays: 11,
        maxDays: 180,
      },
      withFullVaccination: {
        acceptingVisitors: true,
        daysInnoculatedBeforeEntry: 14,
        test: {
          maximumHoursBefore: null,
        },
        quarantine: {
          numberOfDays: null,
        },
        documentsRequired: ["Vaccination Status Proof"],
        other: ["Passenger Locator Form"],
      },
      withoutFullVaccination: {
        acceptingVisitors: false,
        test: {
          maximumHoursBefore: null,
        },
        quarantine: {
          numberOfDays: null,
        },
        documentsRequired: [],
        other: [],
      },
    },
    restrictions: {
      masks: {
        isRequired: true,
        moreInfo: "Face masks are required in all enclosed public spaces",
      },
      lockdowns: false,
      socialDistancing: true,
      groupMaximums: {
        inside: null,
        outside: null,
      },
    },
  },

  {
    country: "iceland",
    colorList: "green",
    entryRequirements: {
      recoveryFromCovid: {
        minDays: 11,
        maxDays: 180,
      },
      withFullVaccination: {
        acceptingVisitors: false,
        daysInnoculatedBeforeEntry: null,
        test: {
          maximumHoursBefore: null,
        },
        quarantine: {
          numberOfDays: null,
        },
        documentsRequired: [],
        other: [],
      },
      withoutFullVaccination: {
        acceptingVisitors: false,
        test: {
          maximumHoursBefore: null,
        },
        quarantine: {
          numberOfDays: null,
        },
        documentsRequired: [],
        other: [],
      },
    },
    restrictions: {
      masks: {
        isRequired: true,
        moreInfo: "Face masks are required in all enclosed public spaces",
      },
      lockdowns: false,
      socialDistancing: true,
      groupMaximums: {
        inside: null,
        outside: null,
      },
    },
  },

  {
    country: "finland",
    colorList: "green",
    entryRequirements: {
      recoveryFromCovid: {
        minDays: 11,
        maxDays: 180,
      },
      withFullVaccination: {
        acceptingVisitors: true,
        daysInnoculatedBeforeEntry: 14,
        test: {
          maximumHoursBefore: null,
        },
        quarantine: {
          numberOfDays: null,
        },
        documentsRequired: ["Vaccination Status Proof"],
        other: [],
      },
      withoutFullVaccination: {
        acceptingVisitors: true,
        test: {
          maximumHoursBefore: 72,
        },
        quarantine: {
          numberOfDays:
            "If tested positive, case must self-isolate until test is negative",
        },
        documentsRequired: [
          "Proof of Negative Test",
          "Proof of COVID recovery",
        ],
        other: [
          "If no documents provided regarding vaccination/testing, traveller must take a test no later than 24 hours after arrival",
        ],
      },
    },
    restrictions: {
      masks: {
        isRequired: true,
        moreInfo:
          "Face masks are required in all enclosed public spaces and businesses",
      },
      lockdowns: false,
      socialDistancing: true,
      groupMaximums: {
        inside: null,
        outside: null,
      },
    },
  },
  {
    country: "hungary",
    colorList: "amber",
    entryRequirements: {
      recoveryFromCovid: {
        minDays: null,
        maxDays: 180,
      },
      withFullVaccination: {
        acceptingVisitors: true,
        daysInnoculatedBeforeEntry: 14,
        test: {
          maximumHoursBefore: 72,
        },
        quarantine: {
          numberOfDays: 0,
        },
        documentsRequired: ["Proof of vaccination"],
        other: [],
      },
      withoutFullVaccination: {
        acceptingVisitors: true,
        test: {
          maximumHoursBefore: null,
        },
        quarantine: {
          numberOfDays: null,
        },
        documentsRequired: ["Negative covid test no longer than 72 hours old"],
        other: ["Temparature check on arrival"],
      },
    },
    restrictions: {
      masks: {
        isRequired: false,
        moreInfo: null,
      },
      lockdowns: false,
      socialDistancing: true,
      groupMaximums: {
        inside: null,
        outside: null,
      },
    },
    hotspots: ["Budapest"],
    healthCareNumber: null,
  },

  {
    country: "czech_republic",
    colorList: "amber",
    entryRequirements: {
      recoveryFromCovid: {
        minDays: 11,
        maxDays: 180,
      },
      withFullVaccination: {
        acceptingVisitors: true,
        daysInnoculatedBeforeEntry: 14,
        test: {
          maximumHoursBefore: null,
        },
        quarantine: {
          numberOfDays: 0,
        },
        documentsRequired: [],
        other: [],
      },
      withoutFullVaccination: {
        acceptingVisitors: false,
        test: {
          maximumHoursBefore: null,
        },
        quarantine: {
          numberOfDays: null,
        },
        documentsRequired: [],
        other: [],
      },
    },
    restrictions: {
      masks: {
        isRequired: true,
        moreInfo:
          "Masks required in public spaces where vaccination checks aren't in place",
      },
      lockdowns: false,
      socialDistancing: true,
      groupMaximums: {
        inside: null,
        outside: null,
      },
    },
    hotspots: ["Prague"],
    healthCareNumber: null,
  },

  {
    country: "estonia",
    colorList: "amber",
    entryRequirements: {
      recoveryFromCovid: {
        minDays: 0,
        maxDays: 180,
      },
      withFullVaccination: {
        acceptingVisitors: true,
        daysInnoculatedBeforeEntry: 0,
        test: {
          maximumHoursBefore: 0,
        },
        quarantine: {
          numberOfDays: 0,
        },
        documentsRequired: [
          "Vaccination Status Proof",
          "Covid Recovery Certificate",
          "Customer Locator Form"
        ],
        other: ["Full vaccine course less than 12 months old", "Second negative test after 6 days"],
      },
      withoutFullVaccination: {
        acceptingVisitors: true,
        test: {
          maximumHoursBefore: 72,
        },
        quarantine: {
          numberOfDays: 10,
        },
        documentsRequired: [
            "Customer Locator Form"
        ],
        other: ["Second negative test after 6 days"],
      },
    },
    restrictions: {
      masks: {
        isRequired: true,
        moreInfo: "Face masks are required in all enclosed public spaces",
      },
      lockdowns: false,
      socialDistancing: false,
      groupMaximums: {
        inside: null,
        outside: null,
      },
    },
    hotspots: [],
    healthCareNumber: "+372 634 6630 or 1220 if in Estonia, English provided between 3pm - 5pm daily",
  },

  {
    country: "luxembourg",
    colorList: "amber",
    entryRequirements: {
      recoveryFromCovid: {
        minDays: null,
        maxDays: null,
      },
      withFullVaccination: {
        acceptingVisitors: false,
        daysInnoculatedBeforeEntry: null,
        test: {
          maximumHoursBefore: null,
        },
        quarantine: {
          numberOfDays: null,
        },
        documentsRequired: [],
        other: [],
      },
      withoutFullVaccination: {
        acceptingVisitors: false,
        test: {
          maximumHoursBefore: null,
        },
        quarantine: {
          numberOfDays: null,
        },
        documentsRequired: [],
        other: null,
      },
    },
    restrictions: {
      masks: {
        isRequired: true,
        moreInfo: "Face masks are required in public spaces",
      },
      lockdowns: false,
      socialDistancing: true,
      groupMaximums: {
        inside: 4,
        outside: 10,
      },
    },
    hotspots: [],
    healthCareNumber: "112"
  },

  {
    country: "malta",
    colorList: "amber",
    entryRequirements: {
      recoveryFromCovid: {
        minDays: null,
        maxDays: null,
      },
      withFullVaccination: {
        acceptingVisitors: true,
        daysInnoculatedBeforeEntry: 14,
        test: {
          maximumHoursBefore: 0,
        },
        quarantine: {
          numberOfDays: 0,
        },
        documentsRequired: ["Public Health Travel Declaration Form"],
        other: [],
      },
      withoutFullVaccination: {
        acceptingVisitors: false,
        test: {
          maximumHoursBefore: null,
        },
        quarantine: {
          numberOfDays: null,
        },
        documentsRequired: [],
        other: null,
      },
    },
    restrictions: {
      masks: {
        isRequired: true,
        moreInfo: "Face masks are required in public spaces",
      },
      lockdowns: false,
      socialDistancing: true,
      groupMaximums: {
        inside: 6,
        outside: 15,
      },
    },
    hotspots: [],
    healthCareNumber: "111"
  },

  {
    country: "liechtenstein",
    colorList: "green",
    entryRequirements: {
      recoveryFromCovid: {
        minDays: null,
        maxDays: 180,
      },
      withFullVaccination: {
        acceptingVisitors: true,
        daysInnoculatedBeforeEntry: null,
        test: {
          maximumHoursBefore: 72,
          acceptedTests: ["PCR", "Rapid antigen test"],
        },
        quarantine: {
          numberOfDays: 0,
        },
        documentsRequired: [
          "Vaccination Status Proof",
          "passenger locator form"
        ],
        other: ["Handled by Switzerland - conditionally - Swiss or Liechtenstein nationals, EU of EFTA nationals, residence permit holders, cross-border permit holders, FDFA legitimation card holders, D visa holders (Issues by Switzerland)"],
      },
      withoutFullVaccination: {
        acceptingVisitors: false,
        test: {
          maximumHoursBefore: null,
        },
        quarantine: {
          numberOfDays: null,
        },
        documentsRequired: [],
        other: null,
      },
    },
    restrictions: {
      masks: {
        isRequired: true,
        moreInfo: "Wearing a facemask is compulsory when travelling on public transport or entering indoor spaces accessible to the public. Failure to do so is punishable by a fine. Children under the age of 12 are exempt from this requirement, as are individuals who are unable to wear a mask for medical reasons",
      },
      lockdowns: false,
      socialDistancing: true,
      groupMaximums: {
        inside: 1000,
        outside: 1000,
      },
    },
    hotspots: [""],
    healthCareNumber: "+423 235 45 32 (24 hours)",
  },

  {
	"country": "latvia",
	"colorList": "green",
	"entryRequirements": {
		"recoveryFromCovid": {
			"minDays": 7,
			"maxDays": 182
		},
		"withFullVaccination": {
			"acceptingVisitors": true,
			"daysInnoculatedBeforeEntry": 15,
			"test": {
				"maximumHoursBefore": 0
			},
			"quarantine": {
				"numberOfDays": 0 
			},
			"documentsRequired": ["Vaccination Status Proof", "Electronic Form"],
			"other": ["Everyone who intends to enter Latvia is required to complete and submit an electronic form no earlier than 48 hours before entering Latvia."]
		},
		"withoutFullVaccination": {
			"acceptingVisitors": false,
			"test": {
				"maximumHoursBefore": 0
			},
			"quarantine": {
				"numberOfDays": 0
			},
			"documentsRequired": [ "Covid Recovery Certificate", "Electronic Form" ],
			"other": ["0 days quarantine is based upon a negative test. Also everyone who intends to enter Latvia is required to complete and submit an electronic form no earlier than 48 hours before entering Latvia."]
		}
	},
	"restrictions": {
		"masks": {
			"isRequired": true,
			"moreInfo": "Face masks must be used in all indoor places, where there is more than 1 person. Children up to 13 years old do not need to use masks, but from 7 years must wear a mask in public transport."
		},
		"lockdowns": false,
		"socialDistancing": true,
		"groupMaximums": {
			"inside": 20,
			"outside": 50
		}
	},
	"hotspots": ["Riga", "Kuldīga", "Daugavpils"],
	"healthCareNumber": "Latvian Centre for Disease Prevention and Control (SPKC) helpline (00 371) 67501590 or (00 371) 67387661 (open 8.30-17.00 working days). In case of emergency call 113."
},
{
	"country": "poland",
	"colorList": "amber",
	"entryRequirements": {
		"recoveryFromCovid": {
			"minDays": 0,
			"maxDays": 180,
		},
		"withFullVaccination": {
			"acceptingVisitors": true,
			"daysInnoculatedBeforeEntry": 14,
			"test": {
				"maximumHoursBefore": 0
			},
			"quarantine": {
				"numberOfDays": 0 
			},
			"documentsRequired": ["Vaccination Status Proof", "Passenger Locator Form"],
			"other": [""]
		},
		"withoutFullVaccination": {
			"acceptingVisitors": true,
			"test": {
				"maximumHoursBefore": 0
			},
			"quarantine": {
				"numberOfDays": 10
			},
			"documentsRequired": [ "Passenger Locator Form" ],
			"other": ["Entered into quarantine database upon arrival"]
		}
	},
	"restrictions": {
		"masks": {
			"isRequired": true,
			"moreInfo": "Face masks must be used in all indoor spaces. You can be fined for not complying"
		},
		"lockdowns": false,
		"socialDistancing": true,
		"groupMaximums": {
			"inside": 150,
			"outside": 150
		}
	},
	"hotspots": ["Warsaw"],
	"healthCareNumber": "Dial 989 and then 6 for English"
}
];
