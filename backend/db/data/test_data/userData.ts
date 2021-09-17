module.exports = [
    {
        name: "John Smith",
        email: "js@google.com",
        password: "password",
        trips: [{
            country: "france",
            trafficLight: "amber",
            dateGoing: new Date(2022,0,12),
            dateReturning: new Date(2022,0,24),
            acceptingTourists: true,
            vaccineRequired: true,
            testRequired: true,
            extraDocsRequired: true,
            newInfo: false
        },
        {
        country: "greece",
        trafficLight: "amber",
        dateGoing: new Date(2022,4,3),
        dateReturning: new Date(2022,4,10),
        acceptingTourists: true,
        vaccineRequired: true,
        testRequired: true,
        extraDocsRequired: true,
        newInfo: true
        }],
        pastTrips: [{
            country: "poland",
            dateGoing: new Date(2021,11,2),
            dateReturning: new Date(2021,11,6),
        }],
    },
    {
        name: "Edd Kleszcz",
        email: "ek@sadballoons.com",
        password: "thisIsTheBestPasswordEver",
        trips: [{
            country: "spain",
            trafficLight: "amber",
            dateGoing: new Date(2022, 0, 12),
            dateReturning: new Date(2022,0,24),
            acceptingTourists: true,
            vaccineRequired: true,
            testRequired: true,
            extraDocsRequired: true,
            newInfo: true
        },
        {
            country: "ireland",
            trafficLight: "amber",
            dateGoing: new Date(2022,4,3),
            dateReturning: new Date(2022,4,10),
            acceptingTourists: true,
            vaccineRequired: true,
            testRequired: true,
            extraDocsRequired: true,
            newInfo: false
        },
        {
            country: "netherlands",
            trafficLight: "amber",
            dateGoing: new Date(2022,4,11),
            dateReturning: new Date(2022,4,19),
            acceptingTourists: true,
            vaccineRequired: true,
            testRequired: true,
            extraDocsRequired: true,
            newInfo: false
        }],
        pastTrips: [{
            country: "italy",
            dateGoing: new Date(2021,11,2),
            dateReturning: new Date(2021,11,6),
        },
        {
            country: "france",
            dateGoing: new Date(2021,11,7),
            dateReturning: new Date(2021,11,10),
        }],
    },
    {
        name: "Mahamud Arteh",
        email: "ma@sadballoons.com",
        password: "IrockThePARTY",
        trips: [{
            country: "spain",
            trafficLight: "amber",
            dateGoing: new Date(2022,0,12),
            dateReturning: new Date(2022,0,24),
            acceptingTourists: true,
            vaccineRequired: true,
            testRequired: true,
            extraDocsRequired: true,
            newInfo: true
        },
        {
            country: "ireland",
            trafficLight: "amber",
            dateGoing: new Date(2022,4,3),
            dateReturning: new Date(2022,4,10),
            acceptingTourists: true,
            vaccineRequired: true,
            testRequired: true,
            extraDocsRequired: true,
            newInfo: false
        },
        {
            country: "netherlands",
            trafficLight: "amber",
            dateGoing: new Date(2022,4,11),
            dateReturning: new Date(2022,4,19),
            acceptingTourists: true,
            vaccineRequired: true,
            testRequired: true,
            extraDocsRequired: true,
            newInfo: false
        }],
        pastTrips: [{
            country: "italy",
            dateGoing: new Date(2021,11,2),
            dateReturning: new Date(2021,11,6),
        },
        {
            country: "france",
            dateGoing: new Date(2021,11,7),
            dateReturning: new Date(2021,11,10),
        }],
    }
]