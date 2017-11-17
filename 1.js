var fs = require("fs")
let country = process.argv[2];

// fs.readFile('countries.json', function(err, data) {
//             if (err) {
//                 throw err;
//             }

//             var theData = JSON.parse(data);

// console.log(theData);
// })

var dataInfo = function (theData) {
    for (i = 0; i < theData.length; i++) {
        if (country.toLowerCase() === theData[i].name.toLowerCase())
            console.log(`Country: ${theData[i].name}
Top level domain: ${theData[i].topLevelDomain}`)
    }
};


const reading = require('./json-file-reader.js');

reading.jsonFileReader('countries.json', dataInfo);


