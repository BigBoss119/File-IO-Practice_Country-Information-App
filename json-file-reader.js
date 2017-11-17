const fs = require("fs")
module.exports = {
        jsonFileReader: function(fileName, cb) {
                        fs.readFile(fileName, function(err, data) {
                            if (err) {
                                throw err;
                            }

                        var parsedData = JSON.parse(data);
                        cb(parsedData);
                        })

                        }
        }