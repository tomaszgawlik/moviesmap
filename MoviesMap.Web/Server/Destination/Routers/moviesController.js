var Maps = require('../Services/movieService');
var bodyParser = require('body-parser');
var express = require('express');
var router = express.Router();
var movieService = new Maps.Services.MovieService();
router.use(bodyParser.json());
router.get("/", function (req, res) {
    res.render("home");
});
router.post("/movies/nearby", function (req, res) {
    var movies = movieService.getNearbyMovies(req.body.latitude, req.body.longitude);
    res.json(movies);
    res.json(null);
});
module.exports = router;
