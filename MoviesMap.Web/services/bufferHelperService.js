(function (service) {
    "use strict";

    service.bufferArrayToObject = (bufferArray) => {
        bufferArray = Buffer.concat(bufferArray);
        let parsedObject = JSON.parse(bufferArray.toString());
        return parsedObject;
    };
})(module.exports)