import http = require('http');
import express = require('express');

var app = express();
var controllers = require('./Routers/moviesController');

// set view engine
app.set("view engine", "vash");
// set public directory

console.log(__dirname);

app.use(express.static("../../" + __dirname + "/public"));

app.use('/', controllers);
// map to controller
//controllers.init(app);

var port = 3000;
http.createServer(app)
	.listen(port); 