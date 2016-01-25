(function (moviesController) {
    "use strict";
	let moviesService = require("../services/moviesService");
	let geoCodingService = require("../services/geoCodingService");
    let bodyParser = require('body-parser');

	moviesController.init = function (app) {
        // for post requests
        app.use(bodyParser.json()); 

		app.get("/", function (req, res) {
			res.render("home");
		});

		app.post("/movies/nearby", function (req, res) {
			let movies = moviesService.getNearbyMovies(req.body.center);
			res.json(movies);
		});
        
        app.post("/movies/navigate", function (req, res) {
            let place = req.body.place;
            
            geoCodingService.localize(place, (center) => {
            
                let movies = moviesService.getNearbyMovies(center);
            
                let response = {
                    center: center,
                    movies: movies
                };

                res.json(response);
            });
		});

	};
})(module.exports);