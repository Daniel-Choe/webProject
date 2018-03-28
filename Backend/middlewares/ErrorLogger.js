var fs = require('fs')

var errlogger = function (err, req, res, next) {
    if (err) {
        fs.appendFile('ErrorLogger.txt', err.stack + "\n", function (err) {
            if (err) {
                console.log(" Logging error failed ");
            }
        });
        res.status(500);
        res.json({ "message": err.message });
    }
    next();
}
module.exports = errlogger;
