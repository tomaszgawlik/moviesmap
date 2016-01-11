import moviesService = require('../Typescript/Services/MovieService');
import bodyParser = require('body-parser');
import express = require('express');

let router = express.Router();

router.use(bodyParser.json()); 

router.get("/", function (req, res) {
    res.render("home");
});

router.post("/movies/nearby", function (req, res) {
    // let movies = moviesService.getNearbyMovies(req.body.latitude, req.body.longitude);
    // res.json(movies);
    res.json(null);
});
        
export = router;