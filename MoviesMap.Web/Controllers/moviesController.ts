/// <reference path="../typings/body-parser/body-parser.d.ts" />
(function (moviesController) {
	var moviesService = require("../services/moviesService");
    import bodyParser = require('body-parser');

	moviesController.init = function (app) {

        // for post requests
        app.use(bodyParser.json()); 

		app.get("/", function (req, res) {
			res.render("home");
		});

		app.post("/movies/nearby", function (req, res) {
			var movies = moviesService.getNearbyMovies(req.body.latitude, req.body.longitude);
			res.json(movies);
		});

	};
})(module.exports);