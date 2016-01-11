var http = require('http');
var express = require('express');
var app = express();
var controllers = require('./controllers/moviesController');
app.set("view engine", "vash");
app.use(express.static(__dirname + "/public"));
app.use('/', controllers);
var port = 3000;
http.createServer(app)
    .listen(port);
