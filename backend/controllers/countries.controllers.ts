const {
  fetchCountries: selectCountries,
} = require("../models/countries.models");

export const getCountries = async (req: any, res: any, next: any) => {
  selectCountries()
    .then((countries: string[]) => {
      console.log(countries);
      res.status(200).send({ countries });
    })
    .catch((err: object) => {
      console.log(err);
    });
};
