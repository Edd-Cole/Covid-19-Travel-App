const {fetchCountries: selectCountries} = require('../models/countries.models');

const getCountries = (req: object, res: any, next: any) => {
    selectCountries()
        .then((countries: object) => {
            res.status(200).send({countries})
        })
        .catch((err: object) => {
            console.log(err)
            next(err);
        })
}

module.exports = {getCountries};