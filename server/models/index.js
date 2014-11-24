var db = require('../db');




module.exports = {
  messages: {
    get: function (callback) {
    	// query database for all messages/usernames
      db("SELECT username, text, messages.id FROM users, messages WHERE messages.user_id = users.id;", callback);
    	// format into json friendly array of messages
    	// send back via callback
    }, // a function which produces all the messages
    post: function (message, callback) {
      var user_id;
      db("SELECT id FROM users WHERE username = '" + message.username + "';", function(err, results){
        if(err) console.log('find username error');
        
        if(results.length === 0){
          
          db("INSERT INTO users (username) VALUE ('" + message.username + "');", function(err, results){
            if(err) console.log('insert user error');  
            console.log('entered new user with id:', results); 
            db("INSERT INTO messages (text, user_id) VALUES ('" +  message.text + "'," + results.insertId + ");", callback);  // insert message
          });

        }

        else {
          console.log('THIS IS THE USR:', results);
          db("INSERT INTO messages (text, user_id) VALUES ('" +  message.text + "'," + results[0].id + ");", callback);  // insert message
        }

      });
    }
     // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function (callback) {
    	db("SELECT * FROM users", callback);
    },
    post: function (user, callback) {
      db("INSERT INTO users (username) VALUE (" + user.username + ");", callback);
    }
  }
};

