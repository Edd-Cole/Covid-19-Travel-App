const { seed: seedFunc } = require("./seed");
const { client: MongoCl } = require("./connection");
const { countryData, userData } = require("../data/development_data/index");

seedFunc(countryData, userData)
  .catch((error: object) => console.error(error))
  .finally(() => MongoCl.close());
