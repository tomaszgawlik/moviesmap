(function (moviesRouter) {
    "use strict";
    let moviesController = require("../controllers/moviesController");
    let bodyParser = require('body-parser');

    moviesRouter.init = (app) => {
        
        app.get("/", function (req, res) {
            res.render("home");
        });

        app.post("/movies/nearby", (req, res) => {
            let center = req.body.center;
            
            moviesController.nearby(center, (movies) => {
                res.json(movies);
            });
        });

        app.post("/movies/navigate", (req, res) => {
            let place = req.body.place;

            moviesController.navigate(place, (response)=> {
                res.json(response);
            })
        });
    };
})(module.exports);