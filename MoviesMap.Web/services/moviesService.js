(function (service) {
    "use strict";
    let http = require("http");
    let bufferHelper = require("./bufferHelperService");
    let imdbApiURL = "http://www.omdbapi.com/";

    service.findMovie = (moviewName, onResult) => {
        var addressRequest = imdbApiURL + '?s=' + moviewName + '&y=&plot=full&r=json';
        http.get(addressRequest, (response) => {
            let bufferArray = [];

            response.on('data', (chunk) => {
                bufferArray.push(chunk);
            });
            response.on('end', () => {
                let moviesCollection = bufferHelper.bufferArrayToObject(bufferArray);

                // workaround -> get information of first found element from search query.
                console.log(moviesCollection);

                if (moviesCollection.Search != undefined)
                    service.getMovieById(moviesCollection.Search[0].imdbID, (firstMovieResult) => {
                        onResult(firstMovieResult);
                    });
            });
        });
    };

    service.getMovieById = (movieId, onResult) => {
        var addressRequest = imdbApiURL + '?i=' + movieId + '&y=&plot=full&r=json';
        http.get(addressRequest, (response) => {
            let bufferArray = [];

            response.on('data', (chunk) => {
                bufferArray.push(chunk);
            });
            response.on('end', () => {
                let movieInfo = bufferHelper.bufferArrayToObject(bufferArray);
                onResult(movieInfo);
            });
        });
    }

    service.getNearbyMovies = (center, onResult) => {
        let markers = [];

        // TODO: replace with serious code
        markers.push({
            id: 0,
            imdbId: "tt0111161",
            latitude: center.lat,
            longitude: center.lng
        });

        onResult(markers);
    };

    service.getNearbyMovie = (center, movieInfo, onResult) => {
        let markers = [];

        // TODO: replace with serious code
        markers.push({
            id: 0,
            title: movieInfo.Title,
            year: movieInfo.Year,
            rating: movieInfo.imdbRating,
            poster: movieInfo.Poster,
            imdbId: movieInfo.imdbId,
            latitude: center.lat,
            longitude: center.lng
        });
        onResult(markers);
    };

})(module.exports)