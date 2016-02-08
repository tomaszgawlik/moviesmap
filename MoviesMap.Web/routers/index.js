(function (routers){
    "use strict";
	// single point to init all app routers
	let moviesRouter = require("./moviesRouter");
    
	routers.init = function (app) {
		moviesRouter.init(app);
	}
})(module.exports);