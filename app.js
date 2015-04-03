/**
 * Created by danielcalabuig on 2/4/15.
 */

var express = require('express');
var app = express();

//Make public folder accessible as static content
app.use('/public', express.static(__dirname + '/public'));

//Configure Jade
app.set('views', './pages');
app.set('view engine', 'jade');

//Basic routing
app.get('/', function (req, res) {
	res.render('index', { title: 'Hey', message: 'Hello there!'});
});

//Start server
var server = app.listen(3000, function configureServer() {

	var host = server.address().address;
	var port = server.address().port;

	console.log('Example app listening at http://%s:%s', host, port);

});

