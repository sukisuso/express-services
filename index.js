/**
*	Jesús Juan Aguilar -- Express-Services
*	09/2016
*   Module file.
*/

var expressData = null;

module.exports = function (express, options){
	outputPresentation ();
		
	expressData = express._router.stack;

	express.get('/services', function(req, res){
		res.sendFile(__dirname + '/index.html');
	});

	express.get('/services/getdata', function(req, res){
		res.json(expressData);
		res.end();
	});

	endMessage();
} 


function outputPresentation () {

console.log("***********************************************");
console.log("*  ### Using Express-services                 *");
console.log("*  ### @version - 1.0.0                       *");
console.log("***********************************************");
}

function endMessage(){
console.log("*  ### You can check your services in:        *");
console.log("*  ### http://path:port/services              *");
console.log("***********************************************");
}