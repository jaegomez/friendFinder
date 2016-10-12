// requiring my friends file
var friendArray = require("../data/friends.js");

var bodyParser = require('body-parser');
var path = require('path');







module.exports = function(app){
	app.get('/api/friends', function(req, res){
		// going to display friendData which is info in friends.js in JSON form
		res.json(friendArray);
	});

	app.post('/api/friends', function(req, res){

		var bestMatchUp = {
			'name': 'none',
			'photo': 'none'
		};

		//comparing stats of answers
		var userTotal = sum(req.body.scores);

		var friendTotal = 0;

		// this is the highest possible score 10 questions highest value is 5 = 50
		var closest = 50;


			//ffunction looops through users to find friend with the closest number to the user
			for (var i = 0; i < friendArray.length; i++) {
				friendTotal = sum(friendArray[i].scores);
				var difference = Math.abs(friendTotal - userTotal);
				if ( difference <= closest ){
					closest = difference;
					bestMatchUp.name = friendArray[i].name;
					bestMatchUp.photo = friendArray[i].photo;
				};
			};
		// };

		//function to add the sum from the scores provided by the array obect
		function sum (array) {
			var total = 0;
			for (var n = 0; n < array.length; n++) {
				total += parseInt(array[n]);
			}
			return total;
		}

		console.log(bestMatchUp);

		//prints out best match up
		res.json(bestMatchUp);

	});

};