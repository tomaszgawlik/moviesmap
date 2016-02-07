(function (moviesController) {
    "use strict";
    let nearbyMoviesViewModelBuilder = require("../services/nearbyMoviesViewModelBuilder");
    let geoCodingService = require("../services/geoCodingService");
    let bodyParser = require('body-parser');

    moviesController.init = (app) => {
        // for post requests
        app.use(bodyParser.json());

        app.get("/", function (req, res) {
            res.render("home");
        });

        app.post("/movies/nearby", (req, res) => {
            nearbyMoviesViewModelBuilder.build(req.body.center, (movies) => {
                res.json(movies);
            });
        });

        app.post("/movies/navigate", (req, res) => {
            let place = req.body.place;

            geoCodingService.localize(place, (center) => {
                nearbyMoviesViewModelBuilder.build(center, (movies) => {
                    let response = {
                        center: center,
                        movies: movies
                    };

                    res.json(response);
                });
            });
        });

    };
})(module.exports);