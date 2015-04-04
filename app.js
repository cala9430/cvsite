/**
 * Created by danielcalabuig on 2/4/15.
 */

var express = require('express');
var router = require('./middleware/router');
var app = express();


// Make public folder accessible as static content
// __dirname variable with container folder path
app.use('/public', express.static(__dirname + '/public'));
app.use('/', router);

// Configure Jade
app.set('views', './pages');
app.set('view engine', 'jade');


//Start server
var server = app.listen(3000, function configureServer() {

	var host = server.address().address;
	var port = server.address().port;

	console.log('Example app listening at http://%s:%s', host, port);

});

