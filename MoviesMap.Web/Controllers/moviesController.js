(function (moviesController) {

	var moviesService = require("../services/moviesService");
    var bodyParser = require('body-parser');

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