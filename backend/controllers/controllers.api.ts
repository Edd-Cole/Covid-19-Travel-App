const { fetchEndpoints: selectEndpoints } = require("../models/models.api");

const getEndpoints = (req: object, res: any, next: any) => {
  selectEndpoints()
    .then((endpoints: string) => {
      endpoints = JSON.parse(endpoints);
      res.status(200).send({ endpoints });
    })
    .catch((err: any) => {
      next(err);
    });
};

module.exports = { getEndpoints };
