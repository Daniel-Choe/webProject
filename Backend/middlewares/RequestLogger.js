var fs = require('fs');

var RequestLogger = function (req, res, next) {

    var log = " " + new Date() + " " + req.method + " " + req.url + "\n";
    fs.appendFile('./RequestLogger.txt', log, function (err) {

        if (err)
            return next(err);
    });

    next();
}

module.exports = RequestLogger;
