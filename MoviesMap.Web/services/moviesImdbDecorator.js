(function (decorator) {
    "use strict";
    decorator.decorateWithImdbSource = (movie) => {

        if (typeof movie.imdbId !== "undefined" && movie.imdbId) {
            // TODO: stub
            if (movie.imdbId === "tt0111161") {
                movie.title = "The Shawshank Redemption";
                movie.rating = 9.3,
                    movie.year = 1994,
                    movie.poster = "http://ia.media-imdb.com/images/M/MV5BODU4MjU4NjIwNl5BMl5BanBnXkFtZTgwMDU2MjEyMDE@._V1_SX300.jpg"
            } else if (movie.imdbId === "tt0068646") {
                movie.title = "The Godfather";
                movie.rating = 9.2,
                    movie.year = 1972,
                    movie.poster = "http://ia.media-imdb.com/images/M/MV5BMjEyMjcyNDI4MF5BMl5BanBnXkFtZTcwMDA5Mzg3OA@@._V1_SX300.jpg"
            } else if (movie.imdbId === "tt0071562") {
                movie.title = "The Godfather II";
                movie.rating = 9.0,
                    movie.year = 1974,
                    movie.poster = "http://ia.media-imdb.com/images/M/MV5BODY0OTIxNTI1Ml5BMl5BanBnXkFtZTcwNjc0NjkzMg@@._V1_SX300.jpg"
            }
        }
        return movie;
    }
})(module.exports)