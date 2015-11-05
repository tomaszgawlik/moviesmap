(function (controllers){
	// single point to init all app controllers
	var homeController = require("./homeController");
	
	controllers.init = function (app) {
		homeController.init(app);
	}
})(module.exports);