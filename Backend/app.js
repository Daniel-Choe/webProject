var express = require('Express');
var bodyParser = require("body-parser");
var router = require("./routes/routing")
var errLogger = require('./middlewares/ErrorLogger');
var reqLogger = require('./middlewares/RequestLogger');

var cors = require('cors');
var app = express();
app.use(cors());

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(reqLogger);
app.use('/', router);
app.use(errLogger);
app.listen(3000);
console.log("Server listening to port 3000");
