// Instructions:
// Import (require) connection.js into orm.js
// In the orm.js file, create the methods that will execute 
// the necessary MySQL commands in the controllers. These are the methods 
// you will need to use in order to retrieve and store data in your database.
// selectAll()
// insertOne()
// updateOne()
// Export the ORM object in module.exports.

var connection = require("./connection")

function selectAll(callback){
    var sql = "select * from burgers_books"
    connection.query(sql, function (err, result) {
        if (err) throw err;
        callback(result)
      });
};

function insertOne(book_name, callback) {
    var sql = `
        insert into burgers_books(book_name, book_read) 
        values ('${book_name}', 0)
    `
    connection.query(sql, function (err, result) {
        if (err) throw err;
        callback(result)
      });
}

function updateOne(id, book_read, callback) {
    var sql = `
        update burgers_books 
        set book_read = ${book_read}
        where id = ${id} 
    `
    connection.query(sql, function (err, result) {
        if (err) throw err;
        callback(result)
      });
}

function deleteOne(id, callback) {
    var sql = `
    DELETE FROM burgers_books 
    where id=${id}
    `
    connection.query(sql, function (err, result) {
        if (err) throw err;
        callback(result)
    });
}

module.exports = {
    selectAll: selectAll,
    insertOne: insertOne,
    updateOne: updateOne,
    deleteOne: deleteOne
}