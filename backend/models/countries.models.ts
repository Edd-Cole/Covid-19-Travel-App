const {main: mongo} = require('../db/seeds/connection')

const fetchCountries = () => {
    return mongo()
        .then(async (db: any) => {
            const countries = await db.collections('countries')[0].find() // error here
            console.log(countries[0].find());
            return countries;
        })
        .then((countries: any) => {
            console.log(countries[0].db)
            return countries;
        })        
}

module.exports = {fetchCountries};