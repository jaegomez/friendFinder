//path 

var path = require('path');

module.exports = function (app){

	// default USE route that displays home page
	app.get('/', function(req,res){
		res.sendFile(path.join(__dirname, "../public/home.html"));
	});

	// GET ROUTE that takes you to survey.html
	app.get('/survey', function(req,res){
		res.sendFile(path.join(__dirname, '../public/survey.html'));
	});

};