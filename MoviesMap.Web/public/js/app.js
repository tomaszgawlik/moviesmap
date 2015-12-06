angular.module('moviesMapApp', ['uiGmapgoogle-maps'])
  .controller('MapController', function($scope) {
    $scope.map = { center: { latitude: 45, longitude: -73 }, zoom: 8 };
  })
  .controller('SearchController', function($scope){
    
    $scope.searchQuery = '';
    
    $scope.searchForMovies = function() {
      console.log("Search for movies with query: " + $scope.searchQuery);
    }
  });