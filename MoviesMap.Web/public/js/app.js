angular.module('moviesMapApp', ['uiGmapgoogle-maps'])
  .controller('MapController', function($scope) {
    
    $scope.map = { center: { latitude: 45, longitude: -73 }, zoom: 8 };
  });