/**
 * Created by danielcalabuig on 2/4/15.
 */

var express = require('express');
var app = express();

app.use(express.static('public'));
app.set('views', './pages');
app.set('view engine', 'jade');


app.get('/', function (req, res) {
	res.render('index', { title: 'Hey', message: 'Hello there!'});
});

var server = app.listen(3000, function configureServer() {

	var host = server.address().address;
	var port = server.address().port;

	console.log('Example app listening at http://%s:%s', host, port);

});

