var http = require('http');
var express = require('express');
var app = express();
var controllers = require('./Controllers');

app.set("view engine", "vash");

// map to controller
controllers.init(app);

var port = 3000;
http.createServer(app)
	.listen(port);