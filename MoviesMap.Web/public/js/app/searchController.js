angular.module('moviesMapApp')
.controller('SearchController', function($scope){
    
    $scope.searchQuery = '';
    
    $scope.searchForMovies = function() {
      console.log("Search for movies with query: " + $scope.searchQuery);
    }
  });