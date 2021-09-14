const {main: mongo} = require('../db/seeds/connection')

const fetchCountries = () => {
    return mongo
        .then(async (db: any) => {
            console.log(db);
            const countries = await db.collections('countries').find()
            return countries;
        })
        .then((countries: object) => {
            console.log(countries)
            return countries;
        })
}

module.exports = {fetchCountries};