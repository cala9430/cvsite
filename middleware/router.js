/**
 * Created by danielcalabuig on 4/4/15.
 */

var express = require('express');
var router = express.Router();

// middleware specific to this router
router.use(function timeLog(req, res, next) {
	console.log('Time: ', Date.now());
	next();
});
// define the home page route
router.get('/', function(req, res) {
	res.render('index', { title: 'Hey', message: 'Hello there!'});
});
// define the about route
router.get('/about', function(req, res) {
	res.send('About birds');
});

module.exports = router;
