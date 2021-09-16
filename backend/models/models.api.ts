const fs = require("fs/promises");

const fetchEndpoints = () => {
  return fs
    .readFile(`${__dirname}/../../endpoints.json`, "utf-8")
    .then((endpoints: object) => {
      return endpoints;
    });
};

module.exports = { fetchEndpoints };
