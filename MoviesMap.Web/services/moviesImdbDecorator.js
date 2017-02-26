(function (decorator) {
    "use strict";
    decorator.decorateWithImdbSource = (movie) => {
            movie.title = movie.Title;
            movie.year = movie.Year;
            movie.raiting = movie.imdbRaiting;
            movie.poster = movie.Poster;
        return movie;
    }
})(module.exports)