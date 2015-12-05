angular.module('moviesMapApp', [])
  .controller('MapController', function() {
    
    var map;
    function initMap() {
        map = new google.maps.Map(document.getElementById('map-canvas'), {
          center: {lat: -34.397, lng: 150.644},
          zoom: 8
        });
    }
    
    initMap();
  });