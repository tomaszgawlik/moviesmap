(function(service) {
	"use strict";
	service.getNearbyMovies = (center, onResult) => {
        
        let markers = [];
        
        // TODO: replace with serious code
        markers.push({
                id: 0,
                imdbId: "tt0111161",
				latitude: center.lat,
				longitude: center.lng
			});
        markers.push({
                id: 1,
                imdbId: "tt0068646", 
				latitude: center.lat + 0.1,
				longitude: center.lng
			});
            
        markers.push({
                id: 2,
                imdbId: "tt0071562",
				latitude: center.lat - 0.1,
				longitude: center.lng
        });
        
        onResult(markers);
	};
	
})(module.exports)