var http = require('http');
var express = require('express');
var app = express();
var controllers = require('./controllers');
var karma = express();

// set view engine
app.set("view engine", "vash");
// set public directory
app.use(express.static(__dirname + "/public"));

// map to controller
controllers.init(app);

var port = 3000;
http.createServer(app)
	.listen(port);
	
karma.use(express.static(__dirname + "/tests"));

var port = 4000;
http.createServer(karma)
	.listen(port);