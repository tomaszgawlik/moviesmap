var http = require('http');
var express = require('express');
var app = express();
var routers = require('./routers');
var bodyParser = require('body-parser');

// set view engine
app.set("view engine", "vash");
// set public directory
app.use(express.static(__dirname + "/public"));

// for all post requests
app.use(bodyParser.json());

// map to controller
routers.init(app);

var port = 3000;
http.createServer(app)
	.listen(port);