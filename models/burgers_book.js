var orm = require('../config/orm')

function addBook(bookName, callback) {
    orm.insertOne(bookName, callback)
}

function getBooks(callback) {
    orm.selectAll(callback)
}

function updateBook(id, bookRead, callback) {
    orm.updateOne(id, bookRead, callback)
}

module.exports = {
    addBook: addBook,
    getBooks: getBooks,
    updateBook: updateBook
}