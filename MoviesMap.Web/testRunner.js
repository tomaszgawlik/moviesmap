var http = require('http');
var express = require('express');
var karma = express();

karma.use(express.static(__dirname + "/tests"));

var port = 4000;
http.createServer(karma)
	.listen(port);