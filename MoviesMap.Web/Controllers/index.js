(function (controllers){
	// single point to init all app controllers
	var moviesController = require("./moviesController");
	
	controllers.init = function (app) {
		moviesController.init(app);
	}
})(module.exports);