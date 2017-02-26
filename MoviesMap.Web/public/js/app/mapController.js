angular.module('moviesMapApp')
    .controller('MapController', function ($scope, $http) {
        $scope.map = {
            center: {
                latitude: 51.5285582,
                longitude: -0.2416805
            },
            zoom: 11,
            events: {
                dragend: function (map) {
                    $scope.updateMoviesOnMap(map.getCenter());
                }
            }
        };

        $scope.markers = {
            nearby: [],
            icon: "icon",
            coords: "self"
        };

        $scope.searchQuery = 'London';

        $scope.updateMoviesOnMap = function (center) {
            var request = {
                center: {
                    lat: center.lat(),
                    lng: center.lng()
                }
            };

            $http.post('/movies/nearby', request)
                .then(function (response) {
                    $scope.markers.nearby = response.data;
                }, function (errorResponse) {
                    $scope.markers.nearby = [];
                });
        };

        $scope.searchForMovies = function () {
            console.log("Search for movies with query: " + $scope.searchQuery);
            var request = {
                movieName: $scope.searchQuery
            };

            $http.post('/movie/navigate', request)
                .then(function (response) {

                    var center = response.data.center;
                    var movies = response.data.movies;
                    
                    $scope.markers.nearby = movies;
                    $scope.map.center = {
                        latitude: center.lat,
                        longitude: center.lng
                    }
                }, function (errorResponse) {
                    console.log(errorResponse);
                });
        };

        $scope.navigateAndFindMovies = function () {
            var request = {
                place: $scope.searchQuery
            };

            $http.post('/movies/navigate', request)
                .then(function (response) {

                    var center = response.data.center;
                    var movies = response.data.movies;

                    console.log(JSON.stringify(movies, null, 4));
                    
                    $scope.markers.nearby = movies;
                    $scope.map.center = {
                        latitude: center.lat,
                        longitude: center.lng
                    }
                }, function (errorResponse) {
                    console.log(errorResponse);
                });
        };

        // initial load
        $scope.navigateAndFindMovies();
    });