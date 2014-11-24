var models = require('../models');
var bluebird = require('bluebird');



module.exports = {
  messages: {
    get: function (req, res) {
    	models.messages.get(function(err, results){
    		if (err) console.log('err lol');
			else {
				res.json({results: results.reverse()})
			}
    	});
    }, // a function which handles a get request for all messages
    post: function (req, res) {
    	console.log('posting message');
    	models.messages.post(req.body, function(err, results) {
    		if (err) console.log("you fucked up");
    		else res.send(results);
    	});
    } // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    get: function (req, res) {
    	console.log('grabbing users!');
    	models.users.get(function(err, results) {
    		if (err) console.log('err lol');
			console.log('get success');
			res.send(results);
    	});	
    },
    post: function (req, res) {
    	models.users.post(req.body, function(err, results) {
    		if (err) console.log('err lol');
    		console.log('post success');
    		res.send(results);
    	});
    }
  }
};

