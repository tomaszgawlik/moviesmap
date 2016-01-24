(function (controllers){
    "use strict";
	// single point to init all app controllers
	let moviesController = require("./moviesController");
    
	controllers.init = function (app) {
		moviesController.init(app);
	}
})(module.exports);