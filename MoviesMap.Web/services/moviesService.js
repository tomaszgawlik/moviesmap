(function(service) {
	
	service.getNearbyMovies = function (latitude, longitude) {
        
        console.log("Log service: "+ latitude + ", " + longitude);
        
        var markers = [];
        
        // TODO: replace with serious code
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
	
})(module.exports)