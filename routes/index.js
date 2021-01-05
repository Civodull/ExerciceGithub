var express = require('express');
var router = express.Router();
var fs = require('fs');
regionJson = fs.readFileSync('./region.json')
region = JSON.parse(regionJson)
    /* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Express', region: region });
});

module.exports = router;