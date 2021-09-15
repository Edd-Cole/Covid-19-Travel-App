const {
  fetchCountries: selectCountries,
} = require("../models/countries.models");

export const getCountries = async (req: any, res: any, next: any) => {
    // Invoke the models function for this controller
  selectCountries()
    .then((countries: string[]) => {
        // send with status 200 and wrapped in an object called countries
      res.status(200).send({ countries });
    })
    .catch((err: object) => {
        // Send error to error handling functions
      next(err)
    });
};
