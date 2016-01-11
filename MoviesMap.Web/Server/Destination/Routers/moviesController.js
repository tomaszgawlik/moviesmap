var bodyParser = require('body-parser');
var express = require('express');
var router = express.Router();
router.use(bodyParser.json());
router.get("/", function (req, res) {
    res.render("home");
});
router.post("/movies/nearby", function (req, res) {
    res.json(null);
});
module.exports = router;
