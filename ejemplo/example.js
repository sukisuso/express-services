/**
*	Jesús Juan Aguilar -- Express-Service
*	09/2016
*   Example
*/

var express = require('express');
var app = express();
var server = app.listen(3000);
var runServices = require('../index.js');

app.use(express.static(__dirname));
app.disable('x-powered-by');

app.get('/', function(req, res){
  	res.sendFile(__dirname + '/index.html');
});

app.post('/log/ejemplo', function(req, res) {
});	

app.get('/new/url', function(req, res){
  	res.sendFile(__dirname + '/index.html');
});

app.post('/new/url3', function(req, res) {
});	


app.get('/getData', function(req, res){
  	res.sendFile(__dirname + '/index.html');
});

app.post('/nep/asd', function(req, res) {
});	


runServices(app);
