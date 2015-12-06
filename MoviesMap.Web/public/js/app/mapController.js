angular.module('moviesMapApp')
.controller('MapController', function($scope) {
    $scope.map = { 
      center: { 
        latitude: 51.5285582,
        longitude: -0.2416805 }, 
        zoom: 11 };
    
    $scope.markers = {
      nearby: [],
      icon: "icon",
      coords: "self"
    }
       
    var marker = {
        latitude: 51.5285582,
        longitude: -0.2416805,
        title: 'London',
        id: "id" // TODO: default somewhere 
      };
      
    // TODO: ajax request, get actuall points based on current location
    $scope.markers.nearby = [marker];
    
  });