angular.module('moviesMapApp')
.controller('MapController', function($scope, $http) {
    $scope.map =  { 
      center: { 
        latitude: 51.5285582,
        longitude: -0.2416805 
      }, 
      zoom: 11,
      events: {
            dragend: function (map) {
                $scope.updateMoviesOnMap(map.getCenter().lat(), map.getCenter().lng());
            }
      } 
    };
    
    $scope.markers = {
      nearby: [],
      icon: "icon",
      coords: "self"
    }
    
    $scope.updateMoviesOnMap = function(latitude, longitude){
      var request = {
            latitude: latitude,
            longitude: longitude
      };
      
      console.log("Request: "+JSON.stringify(request));

      $http.post('/movies/nearby', request)
           .then(function(response){
               console.log(response.data);
             $scope.markers.nearby = response.data;
           }, function(errorResponse){
              $scope.markers.nearby = [];
           });
    }
    
    // initial load
    $scope.updateMoviesOnMap($scope.map.center.latitude, $scope.map.center.longitude);
   
  });