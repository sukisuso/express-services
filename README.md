# express-services
Module for Node.js and Express

##### Import Express-services and just use it with your express server after declare your services.

	var express = require('express');
	var app = express();
	var runServices = require('express-services');

	app.use(express.static(__dirname));
	app.get('/', function(req, res){
	  	res.sendFile(__dirname + '/index.html');
	});

	app.post('/log/ejemplo', function(req, res) {
	});	

	runServices(app);

##### Then you can check your running services in http://path:port/services

`
 Jesus Juan Aguilar - 2016 - jesusjuanaguilar@gmail.com
`