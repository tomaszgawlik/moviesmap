(function (moviesController) {
    "use strict";
    let nearbyMoviesViewModelBuilder = require("../services/nearbyMoviesViewModelBuilder");
    let geoCodingService = require("../services/geoCodingService");

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
})(module.exports);