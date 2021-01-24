// Instructions:
// Inside the connection.js file, setup the code to connect Node to MySQL.
// Export the connection.

var mysql = require('mysql');

var con 
if (process.env.JAWSDB_URL) {
  con = mysql.createConnection(process.env.JAWSDB_URL)
} else {
  con = mysql.createConnection({
    host: "localhost",
    database: "burgers_booklist_db",
    user: "root",
    password: "griffin1"
  });
}

  
con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});

module.exports = con; 