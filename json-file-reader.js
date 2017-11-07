const fs = require("fs")
module.exports = {
        jsonFileReader: function(fileName, cb) {
            fs.readFile(fileName, function(err, data) {
                    if (err) {
                        throw err;
                    }

                    var theData = JSON.parse(data);
                    cb(theData);
                })

            }
        }