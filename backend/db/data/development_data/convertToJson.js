const countryData = require('./countryData.ts');
const fs = require('fs/promises');

const convert = (data) => {
    const jsonData = JSON.stringify(data);
    fs.writeFile(`${__dirname}/countryData.json`, jsonData)
}

convert(countryData);