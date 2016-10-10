//path 

var path = require('path');

module.exports = function (app){

	// direction to home.html file
	app.get('/', function(req,res){
		res.sendFile(path.join(_dirname, "../public/home.html"));
	});

	// routing to survey so it grabs my survey html file
	app.get('/survey', function(req,res){
		res.sendFile(path.join(_dirname, '../public/survey.html'));
	});

};