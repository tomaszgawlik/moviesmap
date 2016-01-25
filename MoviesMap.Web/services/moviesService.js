(function(service) {
	"use strict";
	service.getNearbyMovies = function (center) {
        
        let markers = [];
        
        // TODO: replace with serious code
        markers.push({
                id: 0,
				latitude: center.lat,
				longitude: center.lng,
				title: "London"
			});
        markers.push({
                id: 1,
				latitude: center.lat + 0.1,
				longitude: center.lng,
				title: "London"
			});
            
        markers.push({
                id: 2,
				latitude: center.lat - 0.1,
				longitude: center.lng,
				title: "London"
			});
		return markers;
	};
	
})(module.exports)