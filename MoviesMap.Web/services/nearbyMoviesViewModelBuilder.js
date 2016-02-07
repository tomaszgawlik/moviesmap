(function (viewModelBuilder) {
    "use strict";
    let moviesSource = require("./moviesService");
    let moviesImdbDecorator = require("./moviesImdbDecorator");
    
    viewModelBuilder.build = (localizationCenter, onResult) => {

        moviesSource.getNearbyMovies(localizationCenter, (movies) => {
            for(let movie of movies){
                moviesImdbDecorator.decorateWithImdbSource(movie);
            }
            onResult(movies);
        });
    }
})(module.exports)