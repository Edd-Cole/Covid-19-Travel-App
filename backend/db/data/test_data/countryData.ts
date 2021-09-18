module.exports = [{
    "_id": "123",
    "country": "Portugal",
    "colorList": "amber",
    "entryRequirements": {
      "recoveryFromCovid": {
        "minDays": 11,
        "maxDays": 180
      },
      "withFullVaccination": {
        "acceptingVisitors": true,
        "daysInnoculatedBeforeEntry": 14,
        "test": {
          "maximumHoursBefore": 72
        },
        "quarantine": {
          "numberOfDays": 0
        },
        "documentsRequired": [
          "Vaccination Status Proof",
          "Covid Recovery Certificate"
        ],
        "other": ["Temperature Screening < 38 degrees on arrival"]
      },
      "withoutFullVaccination": {
        "acceptingVisitors": false,
        "test": {
          "maximumHoursBefore": null
        },
        "quarantine": {
          "numberOfDays": null
        },
        "documentsRequired": [],
        "other": null
      }
    },
    "restrictions": {
      "masks": {
        "isRequired": true,
        "moreInfo": "Face masks are required in all enclosed public spaces"
      },
      "lockdowns": false,
      "socialDistancing": true,
      "groupMaximums": {
        "inside": 8,
        "outside": 15
      }
    },
    "hotspots": ["Lisbon"],
    "healthCareNumber": "(+351) 808 24 24 24, press 9 for English"
  },

{
  "country": "Spain",
  "colorList": "amber",
  "entryRequirements": {
    "recoveryFromCovid": null,
    "withFullVaccination": {
      "acceptingVisitors": true,
      "daysInnoculatedBeforeEntry": 14,
      "test": {
        "maximumHoursBefore": 72
      },
      "quarantine": {
        "numberOfDays": 0
      },
      "documentsRequired": [
        "Vaccination Status Proof",
        "Negative Covid-19 Test"
      ],
      "other": [
        "Complete online Health Control Form within 48 hours of travel"
      ]
    },
    "withoutFullVaccination": {
      "acceptingVisitors": false,
      "test": {
        "maximumHoursBefore": null
      },
      "quarantine": {
        "numberOfDays": null
      },
      "documentsRequired": [],
      "other": null
    }
  },
  "restrictions": {
    "masks": {
      "isRequired": true,
      "moreInfo": "Face masks are required in all enclosed public spaces, but not ouside spaces"
    },
    "lockdowns": false,
    "socialDistancing": true,
    "groupMaximums": {
      "inside": 4,
      "outside": 6
    }
  },
  "hotspots": ["Madrid"],
  "healthCareNumber": "Call regional healthcare provider"
},

{
  "country": "Italy",
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
      "other": ["Complete online digital form"]
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
},

{
    "country": "Germany",
  "colorList": "green",
  "withFullVaccination": {
    "acceptingVisitors": true,
    "daysInnoculatedBeforeEntry": null,
    "test": {
      "required": false
    },
    "quarantine": {
      "required": false,
      "numberOfDays": null
    },
    "documentsRequired": ["proof of residence (UK)", "proof of vaccination"],
    "other": ["none"]
  },
  "withoutFullVaccination": {
    "acceptingVisitors": "conditionally - german residents, spouse/partner/child or a german citizen, important roles & urgent travel",
    "daysInnoculatedBeforeEntry": null,
    "test": {
      "required": true,
      "maximumHoursBefore": 72,
      "acceptedTests": ["PCR", "LFD", "LAMP"]
    },
    "quarantine": {
      "required": true,
      "numberOfDays": 10,
      "TTR (Test To Release)": true,
      "whenAvailable": "5 days into quarantine"
    },
    "documentsRequired": ["proof of residence (UK)", "negative test"],
    "other": ["none"]
  },
  "restrictions": {
    "masks": {
      "isRequired": true,
      "moreInfo": "masks in densely populated areas, businesses that require them also"
    },
    "lockdowns": false,
    "socialDistancing": true,
    "groupMaximum": {
      "inside": null,
      "outside": null
    },
    "hotspots": ["Berlin", "Hamburg", "Cologne"]
  }
},

{ 
    "country": "Denmark",
  "colorList": "Green",
  "entryRequirements": {
    "recoveryFromCovid": {
      "minDays": null,
      "maxDays": null
    },
    "withFullVaccination": {
      "acceptingVisitors": true,
      "daysInnoculatedBeforeEntry": 14,
      "test": {
        "maximumHoursBefore": 72
      },
      "quarantine": {
        "numberOfDays": 0
      },
      "documentsRequired": [
        "Vaccination Status Proof or Covid Recovery Certificate"
      ],
      "other": null
    },
    "withoutFullVaccination": {
      "acceptingVisitors": true,
      "test": {
        "maximumHoursBefore": 72
      },
      "quarantine": {
        "numberOfDays": 10
      },
      "documentsRequired": ["Proof of negative test"],
      "other": "test upon arrival, option to test-to-release after day 4"
    }
  },
  "restrictions": {
    "masks": {
      "isRequired": true,
      "moreInfo": "Face masks on public transport, including taxis and ferries"
    },
    "lockdowns": false,
    "socialDistancing": true,
    "groupMaximums": {
      "inside": 500,
      "outside": 500
    }
  },
  "hotspots": ["Copenhagen", "Aarhus", "Herning"],
  "healthCareNumber": "Danish authorities on their helpline (+45 7020 6044)"
},

{
    "country": "Switzerland",
  "colorList": "green",
  "withFullVaccination": {
    "acceptingVisitors": true,
    "daysInnoculatedBeforeEntry": null,
    "test": {
      "required": false
    },
    "quarantine": {
      "required": false,
      "numberOfDays": null
    },
    "documentsRequired": ["proof of residence (UK)", "proof of vaccination"],
    "other": [null]
  },
  "withoutFullVaccination": {
    "acceptingVisitors": "conditionally - Swiss or Liechtenstein nationals, EU of EFTA nationals, residence permit holders, cross-border permit holders, FDFA legitimation card holders, D visa holders (Issues by Switzerland)",
    "daysInnoculatedBeforeEntry": null,
    "test": {
      "required": true,
      "maximumHoursBefore": 72,
      "acceptedTests": ["PCR", "LFD", "LAMP"]
    },
    "quarantine": {
      "required": true,
      "numberOfDays": 10,
      "TTR (Test To Release)": true,
      "whenAvailable": "5 days into quarantine"
    },
    "documentsRequired": [
      "proof of residence (UK)",
      "negative test/covid certificate/recovery within lat 6 months",
      "passenger locator form"
    ],
    "other": [null]
  },
  "restrictions": {
    "masks": {
      "isRequired": true,
      "moreInfo": "masks in densely populated areas, businesses that require them also"
    },
    "lockdowns": false,
    "socialDistancing": true,
    "contactTracing": true,
    "groupMaximum": {
      "inside": null,
      "outside": null
    },
    "hotspots": ["Geneva", "Zurich"]
  }
},
]