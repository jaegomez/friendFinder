// requiring my friends file
var friendArray = require("../data/friends.js");

var bodyParser = require('body-parser');
var path = require('path');







module.exports = function(app){
	app.get('/api/friends', function(req, res){
		// going to display friendData which is info in friends.js in JSON form
		res.json(friendArray);
	});
};