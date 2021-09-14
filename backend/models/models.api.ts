const fs = require("fs/promises");

const fetchEndpoints = () => {
  console.log("in the model");
  return fs
    .readFile(`${__dirname}/../../endpoints.json`, "utf-8")
    .then((endpoints: object) => {
      console.log(endpoints);
      return endpoints;
    });
};

module.exports = { fetchEndpoints };
