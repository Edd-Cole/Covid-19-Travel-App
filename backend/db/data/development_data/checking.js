const data = require('./countryData.ts');

console.log(data.map(datum => {
    return {country: datum.country, max: datum.restrictions.groupMaximums}
}))