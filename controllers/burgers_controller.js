var express = require('express')
var path = require("path");
var burgersBook = require('../models/burgers_book')

var router = express.Router()

router.get("/", function(req, res) {
    burgersBook.getBooks(function(result) {
        var unreadBooks = result.filter(function (book) {
            return book.book_read === 0
        })
        var readBooks = result.filter(function (book) {
            return book.book_read === 1
        })
        res.render('index', {
            unreadBooks: unreadBooks,
            readBooks: readBooks
        })
    })
});

router.get("/api/burgers_books", function(req, res) {
    burgersBook.getBooks(function (result) {
        res.json(result)
    });
});

router.post("/api/burgers_books", function(req, res) {
    console.log(req.body)
    burgersBook.addBook(req.body.book_name, function (result) {
        res.json(result)
    });
});

router.put("/api/burgers_books/:id", function(req, res) {
    burgersBook.updateBook(req.params.id, req.body.book_read, function (result) {
        res.json(result)
    });
});

router.delete("/api/burgers_books/:id", function(req, res) {
    burgersBook.deleteBook(req.params.id, function (result) {
        res.json(result)
    });
});

module.exports = router
