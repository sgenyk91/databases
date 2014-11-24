var mysql = require('mysql');

// Create a database connection and export it from this file.
// You will need to connect with the user "root", no password,
// and to the database "chat".


var connection = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: '',
	database: 'chat'
});
connection.connect();
module.exports = exports = function(queryString, callback){

	// connection.connect();

	connection.query(queryString, function(err, rows) {
		if (err) {
			console.log(err);
			callback(err);
		} else {
			callback(undefined, rows);
		}
		// connection.end();
	});

}


// helper functions
// exports.getAllUsers = function (callback) {

// }