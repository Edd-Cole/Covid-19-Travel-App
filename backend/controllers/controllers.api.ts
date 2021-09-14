const { fetchEndpoints: selectEndpoints } = require("../models/models.api");

const getEndpoints = (req: object, res: any, next: any) => {
  console.log("in the controller");
  selectEndpoints()
    .then((endpoints: string) => {
      endpoints = JSON.parse(endpoints);
      res.status(200).send({ endpoints });
    })
    .catch((err: any) => {
      console.log(err);
      next(err);
    });
};

module.exports = { getEndpoints };
