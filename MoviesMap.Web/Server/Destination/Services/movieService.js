var Services;
(function (Services) {
    var MovieService = (function () {
        function MovieService() {
        }
        MovieService.prototype.getNearbyMovies = function (latitude, longitude) {
            console.log("Log service: " + latitude + ", " + longitude);
            var markers = [];
            markers.push({
                id: 0,
                latitude: latitude,
                longitude: longitude,
                title: "London"
            });
            markers.push({
                id: 1,
                latitude: latitude + 0.1,
                longitude: longitude,
                title: "London"
            });
            markers.push({
                id: 2,
                latitude: latitude - 0.1,
                longitude: longitude,
                title: "London"
            });
            return markers;
        };
        ;
        return MovieService;
    })();
    Services.MovieService = MovieService;
})(Services = exports.Services || (exports.Services = {}));