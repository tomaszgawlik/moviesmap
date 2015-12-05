(function (homeController) {
	
	var service = require("../services");
	
	homeController.init = function (app){
		app.get("/", function (req, res) {
			
			service.testServiceFunction();
	        res.render("home"); 
		});
	};
})(module.exports);