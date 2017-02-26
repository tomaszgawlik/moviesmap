(function (moviesController) {
    "use strict";
    let nearbyMoviesViewModelBuilder = require("../services/nearbyMoviesViewModelBuilder");
    let geoCodingService = require("../services/geoCodingService");
    let movieService = require("../services/moviesService");

    moviesController.nearby = (center, onResult) => {

        nearbyMoviesViewModelBuilder.build(center, onResult);
    };

    moviesController.navigate = (place, onResult) => {

        geoCodingService.localize(place, (center) => {
            nearbyMoviesViewModelBuilder.build(center, (movies) => {
                let response = {
                    center: center,
                    movies: movies
                };
                onResult(response);
            });
        });
    };

    moviesController.navigateByMovie = (movieName, onResult) => {
        movieService.findMovie(movieName, (moviesData) => {
            geoCodingService.localize(moviesData.Country, (center) => {
                nearbyMoviesViewModelBuilder.buildOne(center, moviesData, (movies) => {
                    let response = {
                        center: center,
                        movies: movies
                    };
                    onResult(response);
                });
            });
        });
    };

})(module.exports);