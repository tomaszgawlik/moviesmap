import http = require('http');
import express = require('express');

var app = express();
var controllers = require('./controllers/moviesController');

// set view engine
app.set("view engine", "vash");
// set public directory
app.use(express.static(__dirname + "/public"));

app.use('/', controllers);
// map to controller
//controllers.init(app);

var port = 3000;
http.createServer(app)
	.listen(port); 