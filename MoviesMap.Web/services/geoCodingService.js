(function (service) {
    "use strict";
    let https = require("https");
    let bufferHelper = require("./bufferHelperService");
    let googleGeocodingUrl = "https://maps.googleapis.com/maps/api/geocode/json?";

    service.localize = (place, onResponse) => {
        let addressRequest = googleGeocodingUrl + "address=" + encodeURIComponent(place);

        https.get(addressRequest, (response) => {
                console.log("Got response: " + response.statusCode);

                let bufferArray = [];

                response.on('data', (chunk) => {
                    bufferArray.push(chunk);
                });
                response.on('end', () => {
                    let geoLocations = bufferHelper.bufferArrayToObject(bufferArray);

                    if (geoLocations.results.length > 0) {
                        let firstResult = geoLocations.results[0].geometry.location;

                        let center = {
                            lat: firstResult.lat,
                            lng: firstResult.lng
                        };
                        onResponse(center);
                    }
                });
            })
            .on('error', (e) => {
                console.error('Fail' + e);
            });
    };

})(module.exports)