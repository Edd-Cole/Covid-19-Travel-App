const {
  fetchCountries: selectCountries,
  fetchCountry: selectCountry
} = require("../models/countries.models");

export const getCountries = (req: object, res: any, next: any) => {
    // Invoke the models function for this controller
  return selectCountries()
    .then((countries: string[]) => {
        // send with status 200 and wrapped in an object called countries
      res.status(200).send({ countries });
    })
    .catch((err: object) => {
        // Send error to error handling functions
      next(err)
    });
};

export const getCountry = (req: any, res: any, next: any) => {
    console.log("in controllers")
    const { country } = req.params;
    console.log(country)
    return selectCountry(country)
      .then((country: object) => {
          console.log(country, "<<< controller")
          res.status(200).send({country});
      })
      .catch((err: object) => {
          console.log(err);
          next(err);
      })
}
