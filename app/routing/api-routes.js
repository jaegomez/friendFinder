// requiring my friends file

var freindData = require("../data/friends.js");









module.exports = function(app){
	app.get('/api/friends', function(req, res){
		res.json(freindData);
	});
};