import Maps = require('../Services/movieService');
import bodyParser = require('body-parser');
import express = require('express');

let router = express.Router();
let movieService = new Maps.Services.MovieService();

router.use(bodyParser.json());

router.get("/", function(req, res) {
    res.render("home");
});

router.post("/movies/nearby", function(req, res) {
    let movies = movieService.getNearbyMovies(req.body.latitude, req.body.longitude);
    res.json(movies);
    res.json(null);
});

export = router;